from django.db import models
from django.contrib.auth.models import AbstractUser
from user_home.models import create_new_team_class
# Create your models here.
class UnverifiedUser(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
class RegisterUser(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    teams = models.ManyToManyField(create_new_team_class)
    register_datetime = models.DateTimeField(auto_now_add=True)
    last_login_datetime = models.DateTimeField(auto_now_add=True)
