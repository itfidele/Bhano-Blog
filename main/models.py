from django.db import models

# Create your models here.

from django.db.models import Model, ForeignKey, CharField, TextField, DateTimeField, ImageField, EmailField
from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.contrib.auth.models import User
from main.categories import POST_CATEGORY, USER_CATEGORY, STATUS_CHOICES
from autoslug import AutoSlugField
from taggit.managers import TaggableManager
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.

class Category(models.Model):
    name=models.CharField(max_length=100)
    about_page=models.TextField(null=True,blank=False)
    publish = DateTimeField(default=timezone.now,null=True)
    created = DateTimeField(auto_now_add=True,null=True)
    updated = DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("main:article_category", kwargs={"post_category": self.name})
    
    

class Author(Model):
    user = ForeignKey(User, on_delete=models.CASCADE)
    active = models.BooleanField(default=True)
    added_by = models.ForeignKey(User,on_delete=models.CASCADE,related_name='addedby',null=True)


    def __str__(self):
        return self.user.username

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Author'
        verbose_name_plural = 'Authors'

class PublishedManager(models.Manager):
    def get_queryset(self):
        return super(PublishedManager,self).get_queryset().filter(status='published')

class DraftsManager(models.Manager):
    def get_queryset(self):
        return super(DraftsManager,self).get_queryset().filter(status='draft')


class Post(Model):

    objects = models.Manager() # The default manager.
    published = PublishedManager() # Our custom manager.
    draft = DraftsManager() # Our custom manager.

    title = CharField(max_length=250,unique=True)
    thumbnail = ImageField(upload_to='uploads/%Y/%m/%d')
    slug = AutoSlugField(populate_from='title',unique=True,unique_for_date='publish', null=True)
    author = ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    body = RichTextUploadingField(null=True, blank=True)
    publish = DateTimeField(default=timezone.now)
    created = DateTimeField(auto_now_add=True)
    updated = DateTimeField(auto_now=True)
    views=models.IntegerField(default=0,null=True)
    category=models.ForeignKey(Category,on_delete=models.CASCADE,null=True,blank=False)
    status = CharField(max_length=100, choices=STATUS_CHOICES, default='draft')
    tags = TaggableManager()
    post_from=CharField(default='byosehano',max_length=100)


    class Meta:
        ordering = ('-publish',)

    @property
    def postcategory(self):
        try:
            return self.category.name
        except Exception as e:
            return '-'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        # new
        return reverse('main:article_detail',args=[self.category.name,self.slug])

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'


class Comment(Model):
    post = ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    name = CharField(max_length=100)
    email = EmailField(null=True,blank=True)
    body = TextField()
    created = DateTimeField(auto_now_add=True)
    updated = DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return f'Comment by {self.name} on {self.post}'

class Images(models.Model):
    image=models.ImageField(upload_to='images/')
    image_from=models.CharField(max_length=250)


