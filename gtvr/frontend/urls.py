from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('test/', views.testIndex, name='test_index'),
    path('testiframe/', views.iframeTest)
]


