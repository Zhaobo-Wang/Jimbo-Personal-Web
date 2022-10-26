from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import BlogSerializer
from .models import BlogModel

# Create your views here.


@api_view(['GET'])
def blogs(request):
    blogs = BlogModel.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def blog_detail(request, id):
    try:
        blog = BlogModel.objects.get(pk=id)
    except BlogModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = BlogSerializer(blog)
    return Response(serializer.data)
