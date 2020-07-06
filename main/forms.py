from django import forms
from main.models import Post,User,Comment

class PostForm(forms.ModelForm):
    
    class Meta:
        model = Post
        fields = ("title","author","body","status","thumbnail","tags")
        widgets={
            "body":forms.Textarea(attrs={
                "id":"example",
                "rows":"12",
                
            }),
            "title":forms.TextInput(attrs={
                "class":"form-control",
                "placeholder":""
            }),
            "tags":forms.TextInput(attrs={
                "class":"uniform-input text select2-offscreen",
            })
        }


class UserForm(forms.ModelForm):
    
    class Meta:
        model = User
        fields = ("__all__")


class CommentForm(forms.ModelForm):
    
    class Meta:
        model = Comment
        fields = ("name","email","body")
        widgets={
            "name":forms.TextInput(attrs={
                "class":"form-control",
                "placeholder":"Amazina(ningombwa)",
            }),
            "email":forms.TextInput(attrs={
                "class":"form-control",
                "placeholder":"Email(singombwa)",
            }),
            "body":forms.Textarea(attrs={
                "class":"form-control",
                "placeholder":"andika igitekerezo cyawe(ni ngombwa)",
                "rows":2
            })
        }
