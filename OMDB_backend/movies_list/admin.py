from django.contrib import admin
from .models import LikedMovies, User

# Register your models here.
admin.site.register(LikedMovies)
admin.site.register(User)