from django.urls import path,include
from user_home import views

app_name = 'user_home'

urlpatterns = [
    path('home_page', views.user_home , name = 'home_page'),
    path('get_dashboard_data', views.get_dashboard_data , name = 'get_dashboard_data'),
    path('delete_ongoing_tasks' , views.delete_ongoing_tasks , name = 'delete_ongoing_tasks'),
]
