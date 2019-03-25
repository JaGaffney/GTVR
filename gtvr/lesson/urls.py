from django.urls import path, include

from lesson import views

urlpatterns = [
    path('api/lessons/', views.LessonsViewSet.as_view()),
    path('api/lessons/<int:pk>/', views.LessonsDetail.as_view()),
]
