from django.contrib import admin
from .models import Post,Comment,Category
# Register your models here.

#admin.site.register(Users)

admin.site.register(Category)

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'post_category', 'created', 'status','post_from')
    list_filter = ('publish', 'status','post_from')
    search_fields = ('title', 'publish', 'body')


#admin.site.register(Users)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'post', 'created', 'active')
    list_filter = ('active', 'created', 'updated')
    search_fields = ('name', 'email', 'body')