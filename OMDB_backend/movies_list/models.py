from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):    
    
    def __str__(self):
        return self.username

class LikedMovies(models.Model):
    
    Actors = models.TextField()
    Awards = models.CharField(max_length=255)
    BoxOffice = models.CharField(max_length=255)
    Country = models.CharField(max_length=100)
    Director = models.CharField(max_length=255)
    DVD = models.CharField(max_length=255)
    Genre = models.CharField(max_length=255)
    imdbID = models.CharField(max_length=20)
    imdbRating = models.CharField(max_length=20)
    imdbVotes = models.CharField(max_length=20) 
    Language = models.CharField(max_length=100)
    Metascore = models.CharField(max_length=20)
    Plot = models.TextField()
    Poster = models.CharField(max_length=255)
    Production = models.CharField(max_length=255)
    Rated = models.CharField(max_length=50)
    Ratings = models.JSONField()
    Released = models.CharField(max_length=255)
    Response = models.BooleanField()
    Runtime = models.CharField(max_length=50)
    Title = models.CharField(max_length=255)
    Type = models.CharField(max_length=50)
    Website = models.URLField(null=True)
    Writer = models.CharField(max_length=255)
    Year = models.CharField(max_length=4)


    def __str__(self):
        return self.Title


