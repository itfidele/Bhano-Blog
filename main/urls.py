from django.urls import path
from main.views import *

app_name="main"

urlpatterns = [
    # website
    #path('scrape/',scrape,name='scrape'),
    #path('SiteSetup/<str:domain>/<str:name>/',SiteAdd,name='setupsite'),
    path('<str:post_category>/<slug:slug>',ArticleDetail,name='article_detail'),
]
