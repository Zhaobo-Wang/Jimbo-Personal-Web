from . import views
from django.urls import path

urlpatterns = [
    path("", views.projects_list),
    path("<id>", views.project_detail)
]