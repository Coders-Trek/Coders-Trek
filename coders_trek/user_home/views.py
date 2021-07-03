from django.shortcuts import render , redirect
from django.http import HttpResponse
from modules.imp_funcs import mock_data_generator
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse # For AJAX --> JSON response will be returned for all AJAX calls
from user_home.models import create_new_team_class
from auth_app.models import RegisterUser
from django.core.files.storage import FileSystemStorage

# Create your views here.
def user_home(request):
    return render(request , 'user_home/dashboard.html')

@csrf_exempt
def get_dashboard_data(request):
    if request.is_ajax():
        context = mock_data_generator()
        print(context)
        return JsonResponse({'data' : context} , status = 200)

@csrf_exempt
def delete_ongoing_tasks(request):
    if request.is_ajax():
        print(request.POST)
        context = mock_data_generator()
        print(context)
        return JsonResponse({'data' : context} , status = 200)


def teams_page(request):
    teams = RegisterUser.objects.get(email = request.session['email']).teams.all()
    context = {'teams' : []}
    for team in teams:
        context['teams'].append({'name' : team.team_name , 'image' : team.image ,  'description' : team.description})
    return render(request , 'user_home/team.html' , context)

def create_new_team(request):
    if request.method == 'POST':
        obj = create_new_team_class()
        image = request.FILES['image']
        obj.team_name = request.POST.get('team_name')

        file_name = FileSystemStorage().save(image.name, image)
        t_image = FileSystemStorage().url(file_name)

        obj.image = t_image

        obj.description = request.POST.get('description')
        obj.save()
        user = RegisterUser.objects.get(email=request.session['email'])
        user.teams.add(obj)
        user.save()
        return redirect('user_home:teams_page')