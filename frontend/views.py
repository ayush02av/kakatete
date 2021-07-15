from django.shortcuts import render, redirect
from database.models import *

def Index(request):
	return render(request, 'mainpage.html')

def Play(request):
	if request.method == 'GET':
		if 'game' in request.GET:
			try:
				game = Game.objects.get(Game_Title=request.GET['game'])
			except:
				pass
			else:
				return render(request, 'index.html', {'game':game})
	return redirect(Index)

def About(request):
	return render(request, 'about.html')