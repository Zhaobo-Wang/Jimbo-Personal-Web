from django.db import models

# lets us explicitly set upload path and filename


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)
    
class Project(models.Model):
    title = models.CharField(max_length=50, default='no titles')
    project_date = models.CharField(max_length=50, default='no date')
    category = models.CharField(max_length=50, default='no category')
    personal_team_project = models.CharField(
        max_length=50, default='personal/team')
    introduction_to_project = models.TextField(default='no intro')
    github_link = models.URLField(default='no url')
    image_url = models.ImageField(
        upload_to=upload_to, blank=True, null=True)
# Create your models here.

    def __str__(self):
        return f"{self.title} {self.personal_team_project}"
