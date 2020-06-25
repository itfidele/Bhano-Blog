from django.urls import path
from main.views import *

app_name="main"

urlpatterns = [
    # website
    path('',index, name='homepage'),
    path('scrape/',scrape,name='scrape'),
    path('SiteSetup/<str:domain>/<str:name>/',SiteAdd,name='setupsite'),
    path('category/<str:post_category>/<slug:slug>',ArticleDetail,name='article_detail'),
]
