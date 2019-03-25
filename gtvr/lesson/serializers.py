from rest_framework import serializers
from lesson.models import Lessons, Videos

# Lessons serizalier
   # category_name = serializers.CharField(source='video_1.link')
   #fields = '__all__'
# class LessonsSerializer(serializers.ModelSerializer):
#     videos = serializers.StringRelatedField(many=True)

#     class Meta:
#         model = Lessons
#         fields = '__all__'


class VideosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Videos
        fields = '__all__'

class LessonsSerializer(serializers.ModelSerializer):
    videos = VideosSerializer(many=True)

    class Meta:
        model = Lessons
        fields = '__all__'

    def create(self, validated_data):
        videos_data = validated_data.pop('videos')
        lesson = Lessons.objects.create(**validated_data)
        for video_data in videos_data:
            Videos.objects.create(lesson=lesson, **video_data)
        return lesson

    # very annoying to get working as you have to override the default in django
    def update(self, instance, validated_data):
        # seperates the foreign key from the other values
        videos_data = validated_data.pop('videos')

        # updates the non nested values if applicable
        instance.name = validated_data.get('name', instance.name)
        instance.subject = validated_data.get('subject', instance.subject)

        # loops over the foreign key values
        for video_data in videos_data:
            # checks to see if the foreign key passed in an id which the data will be changed
            item_id = video_data.get('id', None)
            # if an id has been passed
            if item_id:
                # looks for the id in the Video model, passes in the id and data on the Lesson from the instance
                video_item = Videos.objects.get(id=item_id, lesson=instance)
                # adds the new data to the model
                video_item.title = video_data.get('title', video_item.title)
                video_item.link = video_data.get('link', video_item.link)
                # saves
                video_item.save()
            else:
                # if no id exists, create a new item
                lesson = Lessons.objects.get(id=instance.id)
                Videos.objects.create(lesson=lesson, **video_data)
            
        return instance