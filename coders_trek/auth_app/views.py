from django.shortcuts import render
from django.http import JsonResponse # For AJAX --> JSON response will be returned for all AJAX calls
from modules.imp_funcs import mail_sender_function , OTP_generator
from auth_app.models import RegisterUser
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password, check_password # For password hashing
from django.contrib.auth.models import User

# Create your views here.
def login_signup(request):
    context = {}
    return render(request , 'auth/login_signup.html' , context)


def submit_signup_form(request):
    if request.is_ajax() and request.method == 'POST':
        try:
            RegisterUser.objects.get(email=request.POST.get('email'))
            return JsonResponse({'message' : 'Email already registered'} , status = 200)
        except:
            fname = request.POST.get('fname')
            lname  = request.POST.get('lname')
            email      = request.POST.get('signup_email')
            password   = request.POST.get('signup_password')
            x = password
            password = make_password(password)

            OTP = OTP_generator()
            request.session['OTP'] = OTP # Storing the generated OTP as a session variable
            request.session['email'] = email # Storing the email as a session variable

            RegisterUser(fname = fname , lname = lname , email = email , password = password , is_verified = False).save()
            # mail_sender_function(email , str(OTP))

            return JsonResponse({} , status = 200)

def submit_otp_form(request):
    generated_otp = request.session['OTP']
    enterd_otp    = request.POST.get('otp')
    if int(enterd_otp) == int(generated_otp):
        user = RegisterUser.objects.get(email = request.session['email'])
        user.is_verified = True
        user.save()
        return HttpResponse('logged in successfully!')
    else:
        # login_signup_form
        context = {'message':'Entered OTP is incorrect!'}
        RegisterUser.objects.filter(email = request.session['email']).delete()
        del request.session['email']
        return render(request , 'auth/login_signup.html' , context)




def submit_login_form(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = RegisterUser.objects.get(email = email)
        except:
            # User ki email registered nhi hai
            context = {'message' : "Entered Email id not registered"}
            return render(request , 'auth/login_signup.html' , context)

        if user.is_verified:
            if check_password(request.POST.get('password') , user.password):
                return HttpResponse("Logged in successfully")
            else:
                context = {'message' : "Password doesn't match'"}
                return render(request , 'auth/login_signup.html' , context)
        else:
            context = {'message' : "Email id is not verified"}
            return render(request , 'auth/login_signup.html' , context)


def submit_contact_form(request):
    if request.is_ajax() and request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        organization_email = "ayush1219223@jmit.ac.in"
        mail_sender_function(organization_email ,name + '\n' + message + '\n' + email)
        return JsonResponse({'status_message' : 'omg'} , status = 200)

