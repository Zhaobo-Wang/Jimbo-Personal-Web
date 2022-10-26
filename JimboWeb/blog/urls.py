from django.urls import path

from . import views

urlpatterns = [
    path("", views.blogs),
    path("<id>",views.blog_detail)
]