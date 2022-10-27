from . import views
from django.urls import path
from .models import BlogModel

urlpatterns = [
    path("", views.ApiBlogListView.as_view(), name="Blog"),
    # path("", views.blogs),
    path("<id>", views.blog_detail),
]
