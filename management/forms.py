from django import forms
from main.models import Post
from taggit.forms import TagWidget

class PostForm(forms.ModelForm):
    
    class Meta:
        model = Post
        exclude = ("views","author","slug",'publish','post_category','post_from')

        widgets={
            'title':forms.TextInput(attrs={'class':'form-control'}),
            'thumbnail':forms.ClearableFileInput(attrs={'class':'form-control'}),
            'category':forms.Select(attrs={'class':'form-control'}),
            'tags': TagWidget(),
            'status':forms.Select(attrs={'class':'form-control'}),
            'body':forms.TextInput(attrs={'class':'form-control'})
        }

class EditPostForm(forms.ModelForm):
    
    class Meta:
        model = Post
        exclude = ("views","author","slug",'publish','post_category','post_from')

        widgets={
            'title':forms.TextInput(attrs={'class':'form-control'}),
            'category':forms.Select(attrs={'class':'form-control'}),
            'thumbnail':forms.ClearableFileInput(attrs={'class':'form-control'}),
            'tags': TagWidget(),
            'status':forms.Select(attrs={'class':'form-control'}),
            'body':forms.TextInput(attrs={'class':'form-control'})
        }