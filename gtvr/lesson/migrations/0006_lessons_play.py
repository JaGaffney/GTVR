# Generated by Django 2.1.7 on 2019-03-28 01:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lesson', '0005_auto_20190325_1107'),
    ]

    operations = [
        migrations.AddField(
            model_name='lessons',
            name='play',
            field=models.BooleanField(default=False),
        ),
    ]
