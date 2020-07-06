from django.shortcuts import render, get_object_or_404, HttpResponse
from django.contrib.auth.decorators import login_required
import os
from django.utils.text import slugify
# Create your views here.
from main.forms import PostForm, UserForm, CommentForm
from django.views.generic import ListView, DetailView
from main.models import Post, Comment, Images, Author
from django.db.models import Q, Count, QuerySet
from taggit.models import Tag
from django.contrib.auth.models import User
from django.core.files import File
from .categories import POST_CATEGORY
from urllib.request import urlretrieve
from taggit.models import Tag
# get user IP
#from django.contrib.gis.geoip2 import GeoIP2

context = {}
context['categories'] = POST_CATEGORY





class ArticleListView(ListView):
    model = Post.published
    template_name = 'article_list.html'

    # def get_queryset(self):
    #    return Post.objects.exclude(~Q(author=self.request.user))


class ArticleDetailView(DetailView):
    model = Post
    template_name = 'article_detail.html'


def ArticleDetail(request, category, slug):
    post = get_object_or_404(Post, category__name=category, slug=slug)
    post.views=post.views+1
    post.save()
    # get all comment of a given post
    comments = Comment.objects.filter(post=post)

    # post tags ids
    post_tags_ids = post.tags.values_list('id', flat=True)
    similar_posts = Post.objects.filter(
        tags__in=post_tags_ids).exclude(id=post.id)
    similar_posts = similar_posts.annotate(same_tags=Count(
        'tags')).order_by('-same_tags', '?')[:6]
    # context={}
    #if similar_posts.exists:
    similar_posts = Post.objects.filter(category__name=post.category.name).order_by('?').exclude(id=post.id)[:6]
    context['similar_posts'] = similar_posts
    context['post'] = post
    context['form_comment'] = CommentForm()
    context['comments'] = comments

    try:
        next_post = Post.get_next_by_publish(post)
        context['next_post'] = next_post
    except Exception as e:
        context['next_post'] = "#"

    try:
        prev_post = Post.get_previous_by_publish(post)
        context['prev_post'] = prev_post
    except Exception as e:
        context['prev_post'] = "#"

    context['popular_news']=Post.objects.all().order_by('-views')[:6]
    if request.method == 'POST':
        formcomment = CommentForm(request.POST)
        if formcomment.is_valid():
            comment = formcomment.save(commit=False)
            comment.post = post
            if not Comment.objects.filter(name=comment.name,body=comment.body,post=post).exists():
                comment.save()
                context['success_comment'] = "Murakoze ku gitekerezo cyanyu!!"
            else:
                print("Not now karabaye iyi comment ntibaho")

    return render(request, 'article_detail.html', context)


def ArticlesByTag(request, tag_slug):
    posts = Post.objects.all()
    # context={}
    tag = None
    if tag_slug:
        tag = get_object_or_404(Tag, slug=tag_slug)
        posts = posts.filter(tags__in=[tag])
    context['posts'] = posts
    return render(request, 'article_list.html', context)


@login_required()
def addPost(request, slug=None):
    # context={}
    postform = PostForm()
    context['addform'] = postform

    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            context['success'] = "Post added"

    return render(request, 'admin/add_post.html', context)


@login_required()
def allPosts(request):
    # context={}
    post = Post.objects.all()
    context['posts'] = post
    return render(request, 'admin/all_posts.html', context)


def ArticleCategory(request, post_category=None):

    context = {}
    
    if post_category:
        context['category'] = post_category
        tags = Tag.objects.all()  # not working
        post = Post.objects.filter(category__name=post_category)
        context['posts'] = post
        context['tags'] = tags
        context['menu_title']=post_category
    return render(request, 'article_category.html', context)


def scrape(request):
    from operations.sa import PamakeoPress
    pama=PamakeoPress()
    #pama.news_items(links=pamakeolinks)
    

    return HttpResponse("<h1>scraped</h1>")


def SiteAdd(request,domain=None,name=None):
    if not domain==None and not name==None:
        from django.contrib.sites.models import Site
        site=Site()
        site.domain=domain
        site.name=name
        site.save()
        
    return HttpResponse('<h2>Setup Karabaye</h2>')