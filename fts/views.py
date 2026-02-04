from django.shortcuts import render, redirect
from .models import Agenda, Event
from django.utils import timezone
from django.shortcuts import render, redirect, get_object_or_404






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





def event_detail(request):

    today = timezone.now().date()

    # nearest event (today OR future)
    current_event = Event.objects.filter(
        is_available=True,
        date__gte=today
    ).order_by('date').first()

    # remaining upcoming events
    upcoming_events = Event.objects.filter(
        is_available=True,
        date__gt=current_event.date if current_event else today
    ).order_by('date')

    return render(request, 'event.html', {
        'current_event': current_event,
        'upcoming_events': upcoming_events
    })