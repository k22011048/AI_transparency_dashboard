from django.db import models

class PrivacyPolicy(models.Model):
    ai_model = models.ForeignKey('home.AIModel', on_delete=models.CASCADE)
    original_policy = models.TextField()
    simplified_policy = models.TextField()
    risk_score = models.FloatField()

class DataFlow(models.Model):
    source = models.CharField(max_length=100)
    process = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
