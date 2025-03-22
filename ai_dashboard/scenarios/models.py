from django.db import models

DEFAULT_PARAMETERS = {
    "transparency_level": 50,
    "privacy_level": 50,
    "security_level": 50,
    "bias_mitigation_level": 50,
    "fairness_level": 50,
    "user_control_level": 50,
    "auditability_level": 50
}

class Scenario(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    parameters = models.JSONField(default=DEFAULT_PARAMETERS)
    selected_axes = models.JSONField(default=["transparency_level", "privacy_level", "security_level"])


class SimulationResult(models.Model):
    scenario = models.ForeignKey(Scenario, on_delete=models.CASCADE)
    transparency_score = models.IntegerField(default=0)
    privacy_score = models.IntegerField(default=0)
    security_score = models.IntegerField(default=0)
    bias_mitigation_score = models.IntegerField(default=0)
    overall_score = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
