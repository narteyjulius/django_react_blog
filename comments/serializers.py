from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields =[
            'name', 'body', 'email','created'
        ]



class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields =[
            'name', 'body', 'email', 'post'
        ]
