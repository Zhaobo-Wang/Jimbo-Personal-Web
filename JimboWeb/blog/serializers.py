from rest_framework import serializers
from .models import BlogModel


class BlogSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = BlogModel
        fields = ['id', 'title', 'post_date', 'articles', 'tags', 'image', 'file_upload']
