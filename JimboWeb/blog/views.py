from django.shortcuts import render
from django.http import HttpResponse
from .models import BlogModel 
# Create your views here.

def index(request):
    blogs = BlogModel.objects.all()
    return render(request, {
        "blogs": blogs
    })

def blog(request,id):
    return HttpResponse(f"This is the {id} page")