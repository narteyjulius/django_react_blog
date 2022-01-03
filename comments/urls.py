from django.urls import path
from . import views as comment_views
from .views import CreateComments, CommentListView




urlpatterns = [

    # path('api/<slug:post>',  comment_views.comment_list),
    path('api/<slug:post>', CommentListView.as_view()),

    # path('api/create/<slug>', comment_views.comment_create),


    path('api/create/<slug>', CreateComments.as_view()),






]
