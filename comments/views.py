from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from .models import Comment
from blog.models import BlogPost
from comments.serializers import CommentSerializer, CommentCreateSerializer
from rest_framework.decorators import api_view
from rest_framework import status




@api_view(['GET'])
def comment_list(request, post):
    post = get_object_or_404(BlogPost, slug=post,
                                # status='published',
                               )
    comments = Comment.objects.filter(post=post, active=True )
    serializer = CommentSerializer(comments, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['POST'])
def comment_create(request, slug):
    post_instance = get_object_or_404(BlogPost, slug=slug)
    request.data['post'] = post_instance.pk
    serializer = CommentCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class CommentListView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request,  post):
        post = get_object_or_404(BlogPost, slug=post,
                                    # status='published',
                                )
        comments = Comment.objects.filter(post=post, active=True )
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)





class CreateComments(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self,request, slug):
        post_instance = get_object_or_404(BlogPost, slug=slug)
        request.data['post'] = post_instance.pk
        serializer = CommentCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

