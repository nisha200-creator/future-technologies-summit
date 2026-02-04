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





#  model for event page


from django.utils.text import slugify

class Event(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)

    image = models.ImageField(upload_to='events/')
    small_description = models.TextField()

    date = models.DateField()
    time = models.TimeField()
    duration = models.CharField(max_length=50)   

    age_limit = models.CharField(max_length=20)  
    language = models.CharField(max_length=50)

    location = models.CharField(max_length=255)

    ticket_price = models.DecimalField(max_digits=8, decimal_places=2)

    is_available = models.BooleanField(default=True)

    def save(self, *args, **kwargs):

        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1

            while Event.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1

            self.slug = slug

        super().save(*args, **kwargs)
