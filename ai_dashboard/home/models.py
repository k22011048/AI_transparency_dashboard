from django.db import models

class AIModel(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    use_cases = models.TextField()
    transparency_level = models.CharField(max_length=10)
    trust_score = models.FloatField()
    last_updated = models.DateTimeField(auto_now=True)
