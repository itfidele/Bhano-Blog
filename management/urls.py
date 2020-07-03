from django.urls import path
from management.views import *

app_name="management"

urlpatterns = [
    # website
    path('',index, name='index'),
]