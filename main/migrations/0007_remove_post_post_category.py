# Generated by Django 3.0.7 on 2020-07-06 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_post_views'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='post_category',
        ),
    ]
