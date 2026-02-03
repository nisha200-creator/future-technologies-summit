from django.urls import path
from .views import home, agenda_page, speakers_page, sponsors_page

urlpatterns = [
    path('', home, name='home'),
    path('agenda/', agenda_page, name='agenda'),
    path('speakers/', speakers_page, name='speakers'),
    path('sponsors/', sponsors_page, name='sponsors'),
]

