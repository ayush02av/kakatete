from django.shortcuts import render, redirect
from database.models import *

def Index(request):
	return render(request, 'index.html')

def Play(request):
	return render(request, 'play.html')

def PlayGame(request, game):
	game = game.__str__().lower().replace(" ", "")
	return render(request, f'{game}.html')
	
def About(request):
	return render(request, 'about.html')
