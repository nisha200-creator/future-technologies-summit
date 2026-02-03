from django.db import models

class Agenda(models.Model):
    DAY_CHOICES = (
        ('day1', 'Day 1'),
        ('day2', 'Day 2'),
    )

    day = models.CharField(max_length=10, choices=DAY_CHOICES)
    date = models.DateField()
    time = models.CharField(max_length=50)
    activity = models.CharField(max_length=200)
    speakers = models.CharField(max_length=200)

    class Meta:
        ordering = ['date', 'time']

    def __str__(self):
        return f"{self.activity} ({self.get_day_display()})"
