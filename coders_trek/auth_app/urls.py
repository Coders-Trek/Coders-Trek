from django.contrib import admin
from django.urls import path
from auth_app import views

app_name = 'auth'
urlpatterns = [
    path('' , views.login_signup ) ,
    path('submit_signup_form' , views.submit_signup_form , name = 'submit_signup_form'   ),
    path('submit_otp_form' , views.submit_otp_form , name = 'submit_otp_form'   ),
    path('submit_login_form' , views.submit_login_form , name = 'submit_login_form'   ),
    path('submit_contact_form' , views.submit_contact_form , name = 'submit_contact_form'   ),
]
