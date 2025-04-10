# Generated by Django 4.2.6 on 2025-03-06 13:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DataFlow',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source', models.CharField(max_length=100)),
                ('process', models.CharField(max_length=100)),
                ('destination', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='PrivacyPolicy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('original_policy', models.TextField()),
                ('simplified_policy', models.TextField()),
                ('risk_score', models.FloatField()),
                ('ai_model', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.aimodel')),
            ],
        ),
    ]
