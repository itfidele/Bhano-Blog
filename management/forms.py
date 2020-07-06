from django import forms
from main.models import Post

class PostForm(forms.ModelForm):
    
    class Meta:
        model = Post
        exclude = ("views","author","slug",'publish','post_category','post_from')

        widgets={
            'title':forms.TextInput(attrs={'class':'form-control'}),
            'thumbnail':forms.FileInput(attrs={'class':'form-control'}),
            'category':forms.Select(attrs={'class':'form-control'}),
            'tags':forms.TextInput(attrs={'class':'form-control'}),
            'status':forms.Select(attrs={'class':'form-control'}),
            'body':forms.TextInput(attrs={'class':'form-control'})
        }