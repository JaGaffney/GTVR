# Generated by Django 2.1.7 on 2019-03-25 00:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lesson', '0003_auto_20190325_1040'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lessons',
            options={'verbose_name_plural': 'Lessons'},
        ),
        migrations.AlterModelOptions(
            name='videos',
            options={'verbose_name_plural': 'Videos'},
        ),
        migrations.RemoveField(
            model_name='videos',
            name='lesson',
        ),
        migrations.AddField(
            model_name='lessons',
            name='videos',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='lesson.Videos'),
        ),
    ]
