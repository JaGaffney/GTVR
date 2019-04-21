from django.urls import path, include

from lesson import views

urlpatterns = [
    path('api/subjects/', views.SubjectsViewSet.as_view()),
    path('api/subjects/<int:pk>/', views.SubjectsDetail.as_view()),
    path('api/lessons/', views.LessonsViewSet.as_view()),
    path('api/lessons/<int:pk>/', views.LessonsDetail.as_view()),
    path('api/videos/', views.VideosViewSet.as_view()),
    path('api/videos/<int:pk>/', views.VideosDetail.as_view()),
]
