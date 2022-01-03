from django.urls import path
from .views import ContactCreateView

urlpatterns = [
    path('api/', ContactCreateView.as_view()),
]