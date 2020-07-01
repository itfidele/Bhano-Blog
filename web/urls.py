from django.urls import path
from web.views import *

app_name="web"

urlpatterns = [
    # website
    path('',index, name='index'),
    #path('tags/',scrape,name='scrape'),
]
