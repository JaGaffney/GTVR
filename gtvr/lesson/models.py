from django.db import models

class Lessons(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Lessons'

    def __str__(self):
        return self.name

class Videos(models.Model):
    lesson = models.ForeignKey(Lessons, related_name='videos', on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100, blank=True)
    link = models.CharField(max_length=500, blank=True)

    class Meta:
        verbose_name_plural = 'Videos'

    def __str__(self):
        return self.title

