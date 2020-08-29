"""Bhano URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.sitemaps.views import sitemap
from main.sitemaps import PostSitemap,CategorySitemap
from main.feeds import LatestPostsFeed
from django.views.generic import TemplateView
from web.views import coronovirus_report
sitemaps = {
    #'category':CategorySitemap,
    'posts': PostSitemap,
}


urlpatterns = [
    path('grappelli/', include('grappelli.urls')),
    path('admii/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('category/',include('main.urls')),
    path("author/",include('management.urls',namespace='management')),
    path('',include('web.urls')),
    path('ads.txt',TemplateView.as_view(template_name="ads.txt")),
    path('feed/', LatestPostsFeed(), name='post_feed'),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('search/',TemplateView.as_view(template_name="search.html")),
    path('coronovirus/',coronovirus_report,name='coronovirus'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps},name='django.contrib.sitemaps.views.sitemap')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
