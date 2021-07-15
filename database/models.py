from django.db import models
from django.contrib.auth.models import AbstractUser
import django.contrib.auth.validators
import os, glob, pytz, datetime, uuid

UTC = pytz.utc
datetimeNow = datetime.datetime.now(UTC)+datetime.timedelta(hours=5.5)

class User(AbstractUser):
	username = models.CharField(primary_key=True, error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')
	userid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)

class Game(models.Model):
	Game_Title = models.CharField(max_length=50, primary_key=True)
	Max_Players = models.IntegerField(default=2)
	Min_Players = models.IntegerField(default=2)

	def __str__(self):
		return self.Game_Title

class Player(models.Model):
	# User_Connected = models.ForeignKey(User, related_name="User_Connected", on_delete=models.CASCADE)
	Player_Name = models.CharField(max_length=50, primary_key=True)

	def __str__(self):
		return self.Player_Name

class GameServer(models.Model):
	Server_Id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	Game_Connected = models.ForeignKey(Game, on_delete=models.CASCADE)
	Players_Connected = models.ManyToManyField(Player)
	Server_Host = models.ForeignKey(Player, related_name="Server_Host", on_delete=models.CASCADE)
	Game_Status = models.TextField(null=True, blank=True)

	def __str__(self):
		return self.Server_Id.__str__()

class GameServerMessage(models.Model):
	Server_Connected = models.ForeignKey(GameServer, on_delete=models.CASCADE)
	Player_Connected = models.ForeignKey(Player, on_delete=models.CASCADE)
	Message = models.TextField()

	def __str__(self):
		return self.Player_Connected.__str__() + " - " + self.Message + " in " + self.Server_Connected.__str__()