from django.shortcuts import render
from main.models import Post
# Create your views here.
context={}

def index(request):
    '''
    g=GeoIP2()
    ip=request.META.get('REMOTE_ADDR',None)
    if ip:
        city=g.city(ip)['city']
    else:
        city=''
    '''

    posts = Post.objects.all().order_by('-publish')[:5]
    amakurumashya = Post.objects.all().order_by('-publish')
    politiki=Post.objects.filter(post_category='Politiki')[:5]
    imikino=Post.objects.filter(post_category='Imikino')[:8]
    sobanukirwas=Post.objects.filter(post_category='Sobanukirwa')[:8]
    #imyidagaduro=Post.objects.filter(post_category='Imyidagaduro')[:3]
    context['politikis']=politiki
    context['imikino']=imikino
    context['sobanukirwas']=sobanukirwas
    #context['imyidagaduro_posts']=imyidagaduro
    context['posts'] = posts
    context['amakurumashya'] = amakurumashya

    return render(request, 'index.html', context)