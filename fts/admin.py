from django.contrib import admin
from .models import Agenda

@admin.register(Agenda)
class AgendaAdmin(admin.ModelAdmin):
    list_display = ('day', 'date', 'time', 'activity', 'speakers')
    list_filter = ('day', 'date')