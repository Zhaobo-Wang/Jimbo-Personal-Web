from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['title','project_date','category','personal_team_project','introduction_to_project','github_link']

        