from django.contrib import admin
from .models import Agenda, Event, ContactMessage

@admin.register(Agenda)
class AgendaAdmin(admin.ModelAdmin):
    list_display = ('day', 'date', 'time', 'activity', 'speakers')
    list_filter = ('day', 'date')




#  admin for even page

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title','date','time','ticket_price','is_available']

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('subject', 'name', 'email', 'created_at')
    readonly_fields = ('created_at',)
