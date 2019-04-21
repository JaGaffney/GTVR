from django.contrib import admin

# Register your models here.
from .models import Subject, Lessons, Videos

admin.site.register(Subject)
admin.site.register(Lessons)
admin.site.register(Videos)