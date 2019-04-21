from rest_framework import generics, permissions

from .models import Subject, Lessons, Videos
from .serializers import SubjectsSerializer, LessonsSerializer, VideosSerializer


class SubjectsViewSet(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectsSerializer

    permission_classes = [
        permissions.AllowAny,
    ]

# allows for POST, PUT and DELETE requests to the api of the user is Authenticated
class SubjectsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectsSerializer

    permission_classes = [
        permissions.AllowAny,
    ]

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

class VideosViewSet(generics.ListCreateAPIView):
    queryset = Videos.objects.all()
    serializer_class = VideosSerializer

    permission_classes = [
        permissions.AllowAny,
    ]

class VideosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Videos.objects.all()
    serializer_class = VideosSerializer

    permission_classes = [
        permissions.AllowAny,
    ]



##### cant get this to work yet so will have to do a big pull everytime
# displays video info
class LessonsVideosDetail(generics.RetrieveAPIView):
    #queryset = Lessons.objects.all()
    serializer_class = LessonsSerializer

    permission_classes = [
        permissions.AllowAny,
    ]

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        lesson_pk = self.kwargs['pk']
        #video_pk = self.kwargs['video_pk']
        lessons = Lessons.objects.filter(id=lesson_pk)
        #videos = Videos.objects.filter(lesson__in=lessons).filter(id=video_pk)

        return lessons