from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Game)
admin.site.register(GameServer)
admin.site.register(GameServerMessage)