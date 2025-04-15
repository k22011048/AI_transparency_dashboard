from django.db import models

DEFAULT_PARAMETERS = {
    "privacy_level": 50,
    "security_level": 50,
    "transparency_level": 50,
    "trust_level": 50,
    "ethics_level": 50,
    "bias_level": 50
}

DEFAULT_WEIGHTINGS = {
    "privacy_level": 1.0,
    "security_level": 1.0,
    "transparency_level": 1.0,
    "trust_level": 1.0,
    "ethics_level": 1.0,
    "bias_level": 1.0
}

class Scenario(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    parameters = models.JSONField(default=DEFAULT_PARAMETERS)
    selected_axes = models.JSONField(default=list(DEFAULT_PARAMETERS.keys()))
    weightings = models.JSONField(default=DEFAULT_WEIGHTINGS)

class SimulationResult(models.Model):
    scenario = models.ForeignKey(Scenario, on_delete=models.CASCADE)
    privacy_score = models.IntegerField(default=0)
    security_score = models.IntegerField(default=0)
    transparency_score = models.IntegerField(default=0)
    trust_score = models.IntegerField(default=0)
    ethics_score = models.IntegerField(default=0)
    bias_score = models.IntegerField(default=0)
    overall_score = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
