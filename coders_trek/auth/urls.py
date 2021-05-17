from django.contrib import admin
from django.urls import path
from auth import views

urlpatterns = [
    path('' , views.login_signup )
]
