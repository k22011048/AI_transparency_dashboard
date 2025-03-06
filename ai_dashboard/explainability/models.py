from django.db import models

class DecisionProcess(models.Model):
    ai_model = models.ForeignKey('home.AIModel', on_delete=models.CASCADE)
    step_description = models.TextField()

class BiasMetric(models.Model):
    ai_model = models.ForeignKey('home.AIModel', on_delete=models.CASCADE)
    demographic = models.CharField(max_length=100)
    bias_score = models.FloatField()
