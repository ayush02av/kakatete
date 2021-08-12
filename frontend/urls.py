from django.urls import path
from .views import *

urlpatterns = [
	path('', Index),
    path('play/', Play),
    path('<str:game>/', PlayGame),
    path('about/', About),
]