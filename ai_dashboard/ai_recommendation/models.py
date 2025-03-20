from django.db import models

class Feature(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    recommended_model = models.CharField(max_length=100)
    recommendation_reason = models.TextField()

    def __str__(self):
        return self.name
