from django.db import models

class Subject(models.Model):
    name = models.CharField(max_length=100)
    teacher = models.CharField(max_length=100)
    description = models.CharField(max_length=8008, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Lessons(models.Model):
    subject = models.ForeignKey(Subject, related_name='lessons', on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100)
    number = models.IntegerField(null=True, blank=True)
    description = models.CharField(max_length=8008, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Lessons'

    def __str__(self):
        return self.name

class Videos(models.Model):
    lesson = models.ForeignKey(Lessons, related_name='videos', on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100, blank=True)
    link = models.CharField(max_length=500, blank=True)
    play = models.BooleanField(default=False)
    number = models.IntegerField(null=True, blank=True)
    description = models.CharField(max_length=8008, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Videos'

    def __str__(self):
        return self.title

