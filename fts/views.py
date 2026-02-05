from django.shortcuts import render, redirect
from .models import Agenda, Event
from django.utils import timezone
from django.shortcuts import render, redirect, get_object_or_404
from .models import Event






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

    current_event = Event.objects.filter(
        is_available=True,
        date__gte=today
    ).order_by('date').first()

    upcoming_events = Event.objects.filter(
        is_available=True,
        date__gt=current_event.date if current_event else today
    ).order_by('date')

    return render(request, 'event.html', {
        'current_event': current_event,
        'upcoming_events': upcoming_events
    })



# event booking page view
def event_booking(request, slug):
    event = get_object_or_404(Event, slug=slug)

    return render(request, 'event_booking.html', {
        'event': event
    })


def payment_page(request, slug):
    event = get_object_or_404(Event, slug=slug)
    quantity = int(request.GET.get('qty', 1))
    total_amount = event.ticket_price * quantity

    return render(request, 'payment.html', {
        'event': event,
        'quantity': quantity,
        'total_amount': total_amount
    })