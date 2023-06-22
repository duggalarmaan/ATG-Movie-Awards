from rest_framework import serializers
from .models import LikedMovies

class LikedMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LikedMovies
        fields = '__all__'
