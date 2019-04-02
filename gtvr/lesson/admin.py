from django.contrib import admin

# Register your models here.
from .models import Lessons, Videos

admin.site.register(Lessons)
admin.site.register(Videos)