from django.contrib import admin
from .models import Agenda, Event

@admin.register(Agenda)
class AgendaAdmin(admin.ModelAdmin):
    list_display = ('day', 'date', 'time', 'activity', 'speakers')
    list_filter = ('day', 'date')




#  admin for even page

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title','date','time','ticket_price','is_available']
