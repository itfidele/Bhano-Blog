from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from main.models import Post
from django.contrib.auth.models import User
# Create your views here.
context={}

@login_required()
def index(request):
    user=User.objects.get(id=request.user.id)
    post=Post.objects.all()
    context['post_reports']=post
    return render(request,'management/reports.html',context)

