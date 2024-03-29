# Generated by Django 3.0.7 on 2020-07-25 18:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_category_about_page'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='category',
            name='publish',
            field=models.DateTimeField(default=django.utils.timezone.now, null=True),
        ),
        migrations.AddField(
            model_name='category',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
