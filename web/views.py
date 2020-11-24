from django.shortcuts import render,get_object_or_404
from main.models import Post
from taggit.models import Tag

# Create your views here.
context={}
context['popular_news']=Post.objects.all().order_by('-views','-publish')[:6]
context['posts']=Post.published.all().order_by('-publish')[:8]

def index(request):

    #posts = Post.published.all().order_by('-publish')[:8]
    
    if request.user_agent.is_mobile:
        amakurumashya = Post.published.all().order_by('-publish')[:8]
    else:
        amakurumashya = Post.published.all().order_by('-publish')[:16]
    politiki=Post.published.filter(category__name='Politiki').order_by('-publish')[:5]
    imikino=Post.published.filter(category__name='Imikino').order_by('-publish')[:8]
    sobanukirwas=Post.published.filter(category__name='Sobanukirwa').order_by('-publish')[:8]
    ubuzimas=Post.published.filter(category__name='Ubuzima').order_by('-publish')[:5]
    ikoranabuhangas=Post.published.filter(category__name='Ikoranabuhanga').order_by('-publish')[:5]
    hiryanohino=Post.published.filter(category__name='Hirya no Hino').order_by('-publish')[:5]
    urukundo=Post.published.filter(category__name='Urukundo').order_by('-publish')[:5]
    ntibisanzwe=Post.published.filter(category__name='Ntibisanzwe').order_by('-publish')[:5]
    enterntainment=Post.published.filter(category__name='Imyidagaduro').order_by('-publish')[:5]
    
    context['ntibisanzwe']=ntibisanzwe
    context['urukundo']=urukundo
    context['hiryanohino']=hiryanohino
    #imyidagaduro=Post.objects.filter(post_category='Imyidagaduro')[:3]
    context['politikis']=politiki
    context['imikino']=imikino
    context['sobanukirwas']=sobanukirwas
    context['ubuzimas']=ubuzimas
    context['enterntainment']=enterntainment
    #context['imyidagaduro_posts']=imyidagaduro

    context['amakurumashya'] = amakurumashya
    context['ikoranabuhangas']=ikoranabuhangas

    return render(request, 'index.html', context)


def ArticlesByTag(request, tag_slug):
    posts = Post.objects.all()
    # context={}
    tag = None
    
    if tag_slug:
        tag = get_object_or_404(Tag, slug=tag_slug)
        posts = posts.filter(tags__in=[tag])
        context['menu_title']=tag_slug
    context['posts'] = posts
    return render(request, 'article_category.html', context)


def coronovirus_report(request):
    return render(request,'coronovirus.html',context)