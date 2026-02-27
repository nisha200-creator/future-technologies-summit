from django import forms
from django.contrib.auth.models import User

class Contact(forms.ModelForm):
    class Meta:
        Model = User
        fields = ["username", "password", "email","first_name", "last_name"]

from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message']
