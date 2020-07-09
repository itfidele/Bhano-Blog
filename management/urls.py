from django.urls import path
from management.views import *

app_name="management"

urlpatterns = [
    # website
    path('',index, name='index'),
    path('new_post',new_post, name='new_post'),
    path('new_post/<int:pk>/',new_post, name='edit_post'),
    path('post_report',post_report, name='post_report'),
]