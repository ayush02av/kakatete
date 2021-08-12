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
				game = game.__str__().lower().replace(" ", "")
				return render(request, 'index.html', {'game':game})
	return redirect(Index)

def About(request):
	return render(request, 'about.html')

def Testing(request):
	return render(request, 'testing.html')

def Chess(request):
	return render(request, 'chess.html')

def TicTacToe(request):
	return render(request, 'tictactoe.html')

def Ludo(request):
	return render(request, 'ludo.html')

def TestingPlay(request, game):
	game = game.__str__().lower().replace(" ", "")
	return render(request, f'{game}.html')
