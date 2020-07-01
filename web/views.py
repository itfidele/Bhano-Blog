from django.shortcuts import render
from main.models import Post
# Create your views here.
context={}

def index(request):

    posts = Post.objects.all().order_by('-publish')[:5]
    amakurumashya = Post.objects.all().order_by('-publish')
    politiki=Post.objects.filter(post_category='Politiki').order_by('-publish')[:5]
    imikino=Post.objects.filter(post_category='Imikino').order_by('-publish')[:8]
    sobanukirwas=Post.objects.filter(post_category='Sobanukirwa').order_by('-publish')[:8]
    ubuzimas=Post.objects.filter(post_category='Ubuzima').order_by('-publish')[:5]
    ikoranabuhangas=Post.objects.filter(post_category='Ikoranabuhanga').order_by('-publish')[:5]
    #imyidagaduro=Post.objects.filter(post_category='Imyidagaduro')[:3]
    context['politikis']=politiki
    context['imikino']=imikino
    context['sobanukirwas']=sobanukirwas
    context['ubuzimas']=ubuzimas
    #context['imyidagaduro_posts']=imyidagaduro
    context['posts'] = posts
    context['amakurumashya'] = amakurumashya
    context['ikoranabuhangas']=ikoranabuhangas

    return render(request, 'index.html', context)