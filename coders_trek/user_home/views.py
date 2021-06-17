from django.shortcuts import render
from django.http import HttpResponse
from modules.imp_funcs import mock_data_generator
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse # For AJAX --> JSON response will be returned for all AJAX calls

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