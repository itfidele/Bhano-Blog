from django.shortcuts import render, get_object_or_404, HttpResponse,get_list_or_404
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
import os
from django.utils.text import slugify
# Create your views here.
from main.forms import PostForm,CommentForm
from django.views.generic import ListView, DetailView
from main.models import Post, Comment, Images, Author
from django.db.models import Q, Count, QuerySet
from taggit.models import Tag
from django.contrib.auth.models import User
from .categories import POST_CATEGORY
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
    try:
        post = get_object_or_404(Post, category__name=category, slug=slug)
    except Exception as e:
        if category == 'Enterntainment':
            post = get_object_or_404(Post,slug=slug)
        else:
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

    context['popular_news']=Post.published.all().order_by('-views')[:6]
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
    context['popular_news']=Post.published.all().order_by('-views')[:6]
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
    context['popular_news']=Post.published.all().order_by('-views')[:6]
    context['category'] = post_category
    #tags = Tag.objects.all()  # not working
    post = get_list_or_404(Post.objects.filter(category__name=post_category).order_by('-publish'))
    paginator = Paginator(post, 8)
    page = request.GET.get('page')
    posts = paginator.get_page(page)
    context['posts'] = posts
    #context['tags'] = tags
    context['menu_title']=post_category
    return render(request, 'article_category.html', context)
