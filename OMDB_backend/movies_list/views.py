from django.shortcuts import render, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import LikedMoviesSerializer
from .models import LikedMovies, User

# Create your views here.

class UserRegistrationAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if username and password and email:
            try:
                User.objects.create_user(username=username, password=password, email=email)
                return Response(status=status.HTTP_201_CREATED)
            except:
                return Response({'error': 'User creation failed.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Missing required fields.'}, status=status.HTTP_400_BAD_REQUEST)

class UserLoginAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

class UserLogoutAPIView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': 'Logout successful.'}, status=status.HTTP_200_OK)

class MovieListView(APIView):
    def get(self, request):
        # Logic to retrieve movies from the database or external API
        movies = LikedMovies.objects.all()

        # Serialize the movie data using the serializer
        serialized_movies = LikedMoviesSerializer(movies, many=True).data

        return Response(serialized_movies)

    def post(self, request):
        serializer = LikedMoviesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    def delete(self, request, movie_id):
        
        movie = get_object_or_404(LikedMovies, id=movie_id)
        
        # Delete the movie object
        movie.delete()
        return Response(status=204)  # 204 No Content