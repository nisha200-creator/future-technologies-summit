# from django.urls import path
# from .views import home, agenda_page, speakers_page, sponsors_page, event_detail
# from . import views

# urlpatterns = [
#     path('', home, name='home'),
#     path('agenda/', agenda_page, name='agenda'),
#     path('speakers/', speakers_page, name='speakers'),
#     path('sponsors/', sponsors_page, name='sponsors'),
#     path('event/', views.event_detail, name='event_detail'),

#     path('event/<int:event_id>/booking/', views.event_booking, name='event_booking'),
#     path('event/<int:event_id>/payment/', views.payment_page, name='payment_page'),





    

   
# ]


from django.urls import path
from .views import home, agenda_page, speakers_page, sponsors_page
from . import views

urlpatterns = [
    path('', home, name='home'),
    path('agenda/', agenda_page, name='agenda'),
    path('speakers/', speakers_page, name='speakers'),
    path('sponsors/', sponsors_page, name='sponsors'),

    path('event/', views.event_detail, name='event_detail'),

    # slug-based booking & payment
    path('event/<slug:slug>/booking/', views.event_booking, name='event_booking'),
    path('event/<slug:slug>/payment/', views.payment_page, name='payment_page'),
]

