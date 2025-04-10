# Generated by Django 4.2.6 on 2025-03-14 18:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AIModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('useCases', models.TextField()),
                ('transparencyLevel', models.CharField(max_length=100)),
                ('developer', models.CharField(max_length=100)),
                ('launchDate', models.DateField()),
                ('modelSize', models.CharField(max_length=100)),
                ('architectureDiagram', models.ImageField(upload_to='architecture_diagrams/')),
                ('architectureDescription', models.TextField()),
                ('trainingData', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='TrustScore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('model', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='model_details.aimodel')),
            ],
        ),
    ]
