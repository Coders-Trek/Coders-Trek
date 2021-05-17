from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.
def login_signup(request):
    # return HttpResponse("lage pde hai")
    context = {}
    return render(request , 'auth/login_signup.html' , context)