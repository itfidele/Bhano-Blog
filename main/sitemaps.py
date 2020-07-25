from django.contrib.sitemaps import Sitemap
from .models import Post,Category

class PostSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.9
    
    def items(self):
        return Post.published.all()
    def lastmod(self, obj):
        return obj.updated

class CategorySitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.9
    
    def items(self):
        return Category.objects.all()
    def lastmod(self, obj):
        return obj.updated