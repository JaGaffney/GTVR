from rest_framework import generics, permissions

from .models import Lessons
from .serializers import LessonsSerializer

# displays a list of all Jobs no matter which user made it, may be a better a way to display this infomration?
class LessonsViewSet(generics.ListCreateAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer

    permission_classes = [
        permissions.AllowAny,
    ]

# allows for POST, PUT and DELETE requests to the api of the user is Authenticated
class LessonsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer

    permission_classes = [
        permissions.AllowAny,
    ]
