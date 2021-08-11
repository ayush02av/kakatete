from django.urls import path
from .views import *

urlpatterns = [
    path('', Index),
    path('play/', Play),
    path('about/', About),
    path('testing/', Testing),
    path('play/<str:game>/', TestingPlay)
]