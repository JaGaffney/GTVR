# Generated by Django 2.1.7 on 2019-04-04 01:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lesson', '0008_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lessons',
            name='subject',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lessons', to='lesson.Subject'),
        ),
    ]
