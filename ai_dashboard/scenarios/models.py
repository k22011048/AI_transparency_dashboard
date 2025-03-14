from django.db import models

class Scenario(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    parameters = models.JSONField()

class SimulationResult(models.Model):
    scenario = models.ForeignKey(Scenario, on_delete=models.CASCADE)
    transparency_score = models.IntegerField()
    privacy_score = models.IntegerField()
    bias_mitigation_score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
