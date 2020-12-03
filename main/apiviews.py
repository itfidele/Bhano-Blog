from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Post,Category,Author
from .serializers import PostSerializers,Categoryserializers

'''
class PostList(APIView):
    def post(self,request):
        posts=Post.published.all()[:20]
        data=PostSerializers(posts,many=True).data
        return Response(data)

class PostDetail(APIView):
    def get(self,request,pk):
        post=get_object_or_404(Post,pk=pk)
        data=PostSerializers(post).data
        return Response(data)
'''

class PostList(generics.ListCreateAPIView):
    queryset = Post.published.all().order_by('-publish')[:20]
    serializer_class = PostSerializers


class PostDetail(generics.RetrieveDestroyAPIView):
    queryset = Post.published.all()
    serializer_class = PostSerializers