from django.urls import path
from .views import BlogPostListView, BlogPostDetailView  #, BlogPostFeaturedView, BlogPostCategoryView



urlpatterns = [

    # path('category/api/', BlogPostCategoryView.as_view()),
    # path('featured/api/', BlogPostFeaturedView.as_view()),
    path('api/', BlogPostListView.as_view()),
    path('api/<slug>', BlogPostDetailView.as_view()),

]
