from django.urls import path
from .apiviews import *

urlpatterns = [
	path('', Test),
	path('gamestatus/<str:serverid>/<str:player>/', ServerStatus),
]