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
            name='TransparencyReport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('report_date', models.DateField()),
                ('transparency_score', models.FloatField()),
                ('ai_model', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.aimodel')),
            ],
        ),
        migrations.CreateModel(
            name='ComplianceStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('regulation', models.CharField(max_length=100)),
                ('status', models.CharField(choices=[('Compliant', 'Compliant'), ('Non-Compliant', 'Non-Compliant')], max_length=20)),
                ('last_checked', models.DateField()),
                ('ai_model', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.aimodel')),
            ],
        ),
        migrations.CreateModel(
            name='AuditLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('change_description', models.TextField()),
                ('change_date', models.DateField()),
                ('ai_model', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.aimodel')),
            ],
        ),
    ]
