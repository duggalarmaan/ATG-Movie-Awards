# Generated by Django 4.2.2 on 2023-06-22 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies_list', '0002_remove_likedmovies_user_remove_user_liked_movies'),
    ]

    operations = [
        migrations.AlterField(
            model_name='likedmovies',
            name='Metascore',
            field=models.CharField(default=5, max_length=20),
            preserve_default=False,
        ),
    ]
