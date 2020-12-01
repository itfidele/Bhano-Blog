from rest_framework import serializers
from .models import Post,Category,Author

class PostSerializers(serializers.ModelSerializer):

    class Meta:
        model=Post
        fields='__all__'

class Categoryserializers(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'



