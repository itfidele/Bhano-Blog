from django.urls import path
from web.views import *

app_name="web"

urlpatterns = [
    # website
    path('',index, name='index'),
    path('tags/<str:tag_slug>/',ArticlesByTag,name='article_tag'),
]
