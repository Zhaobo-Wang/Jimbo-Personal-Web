# forms.py
from django import forms
from blog import models


class BlogForm(forms.ModelForm):

    class Meta:
        model = models.BlogModel
        fields = ['name', 'image', 'file_upload']
