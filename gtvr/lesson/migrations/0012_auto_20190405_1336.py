# Generated by Django 2.1.7 on 2019-04-05 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lesson', '0011_auto_20190405_1336'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lessons',
            name='number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='videos',
            name='number',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]