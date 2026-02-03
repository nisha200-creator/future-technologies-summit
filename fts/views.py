from django.shortcuts import render
from .models import Agenda

def home(request):
    return render(request, 'home.html')


def agenda_page(request):
    day = request.GET.get('day', 'day1')

    agendas = Agenda.objects.filter(day=day)

    return render(request, 'agenda.html', {
        'agendas': agendas,
        'active_day': day
    })



def speakers_page(request):
    return render(request, 'speakers.html')


def sponsors_page(request):
    return render(request, 'sponsors.html')