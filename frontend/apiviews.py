from django.http import JsonResponse
from main.models import Player, GameServer, GameServerMessage

def Response(content={'Error':'Some Error'}):
	return JsonResponse(content)

def Test(request):
	return Response(
		{
		'test':'1'
		})

def ServerStatus(request, serverid, player):
	try:
		server = GameServer.objects.get(Server_Id=serverid)
		if Player.objects.get(Player_Name=player) in server.Players_Connected.all():
			return Response(
				{
					'Server_Game_Status':server.Game_Status,
					"Server_Messages":list(GameServerMessage.objects.filter(Server_Connected=server).values())
				}
				)
	except:
		pass
	return Response()