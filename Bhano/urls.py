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
from main.views import lazy_load_posts
from main.models import Post
from rest_framework import routers, serializers, viewsets
from main.apiviews import PostList
from main.apiviews import PostDetail

# Serializers define the API representation.
class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'body', 'thumbnail','publish','views']
        
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-publish')[:10]
    serializer_class = PostSerializer

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)

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
    path('lazy_load_posts/', lazy_load_posts, name='lazy_load_posts'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps},name='django.contrib.sitemaps.views.sitemap'),
    path('api/posts/',PostList.as_view(),name='posts_api'),
    path('api/posts/<int:pk>/',PostList.as_view(),name='posts_api_detail'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
