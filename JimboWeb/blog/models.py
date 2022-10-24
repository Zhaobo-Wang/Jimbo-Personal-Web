from email.policy import default
from django.db import models

# Create your models here.

class BlogModel(models.Model):
    title = models.CharField(max_length=50, default='no titles')
    post_date = models.DateField(auto_now=True)
    articles = models.TextField(default='no thoughts')
    tags = models.CharField(max_length=20, default='no tags')
    image = models.ImageField(upload_to='uploads', blank=True)
    file_upload = models.FileField(upload_to='uploads', blank=True)


    def __str__(self):
        return f"{self.title} {self.post_date}"

    def display_detail(self):
        return f"{self.title} {self.post_date} {self.articles} {self.tags} {self.image}"



    