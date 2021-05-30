from django.db import models
from django.contrib.auth.models import AbstractUser

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
    last_login_datetime = models.DateTimeField(auto_now_add=True)