from django.db import models

class TrustFactor(models.Model):
    name = models.CharField(max_length=100)
    weight = models.FloatField()

class PredefinedScenario(models.Model):
    name = models.CharField(max_length=100)
    parameters = models.JSONField()
