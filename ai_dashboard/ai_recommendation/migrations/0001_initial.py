# Generated by Django 4.2.6 on 2025-03-20 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('recommended_model', models.CharField(max_length=100)),
                ('recommendation_reason', models.TextField()),
            ],
        ),
    ]
