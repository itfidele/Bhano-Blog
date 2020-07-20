from django.shortcuts import render,get_object_or_404,redirect
from django.contrib.auth.decorators import login_required
from main.models import Post
from django.contrib.auth.models import User
from .forms import PostForm,EditPostForm
# Create your views here.
context={}

@login_required()
def index(request):
    user=User.objects.get(id=request.user.id)
    if user.is_superuser == True:
        post_num=Post.objects.filter(author=user).count
        all_num_posts=Post.objects.all().count
        context['all_num_posts']=all_num_posts
    post_num=Post.objects.filter(author=user).count
    context['post_num']=post_num
    return render(request,'management/index.html',context)


@login_required()
def new_post(request,pk=None):
    context['success_post']=''
    if not pk == None:
        post = Post.objects.get(id=pk)
        postform = EditPostForm(request.POST or None,instance=post)
        if request.method== 'POST':
            if postform.is_valid():
                postform.save()
                return redirect('/author/post_report')
        context['form']=postform
        return render(request,'management/edit_post.html',context)
    else:
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
    user=User.objects.get(id=request.user.id)
    if user.is_superuser == True:
        post=Post.objects.all().order_by('-publish')
    else:
        post=Post.objects.filter(author=request.user).order_by('-publish')
    context['post_reports']=post
    context['user']=user
    return render(request,'management/reports.html',context)

