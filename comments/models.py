from django.db import models
from blog.models import BlogPost


class Comment(models.Model):
    STATUS_CHOICES = (
                        ('true', 'True'),
                        ('false', 'False'),
    )
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=False)
    image = models.ImageField(upload_to='commet_img', blank=True, null=True, default='media/default.jpg')

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return f'Comment by {self.name} on {self.post}'   
