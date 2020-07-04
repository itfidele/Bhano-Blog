from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import Post
from django.contrib.auth.models import User
from .forms import PostForm
# Create your views here.
context={}

@login_required()
def index(request):
    return render(request,'management/index.html',context)


@login_required()
def new_post(request):
    postform=PostForm()
    context['add_post']=postform
    if request.method == 'POST':
        formpost = PostForm(request.POST,request.FILES)
        if formpost.is_valid():
            p = formpost.save(commit=False)
            p.author = request.user
            if not Post.objects.filter(title=p.title,body=p.body,author=request.user).exists():
                p.save()
                formpost.save_m2m()
                context['success_post'] = '<div class="alert alert-success">Post yawe yageze Kuri Website, Komeza ushyireho Inkuru nyinshi... Murakoze </div>'
            else:
                print("Not now karabaye iyi comment ntibaho")

        else:
            print('Invalid Form')
            
    

    return render(request,'management/new_post.html',context)

@login_required()
def post_report(request):
    #user=User.objects.get(request.user)
    post=Post.objects.filter(author=request.user)
    context['post_reports']=post
    return render(request,'management/reports.html',context)

