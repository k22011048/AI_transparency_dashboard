from django.db import models

class AIModel(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    use_cases = models.TextField()
    transparency_level = models.CharField(max_length=10)
    trust_score = models.IntegerField()  # Trust score out of 10
    
    def __str__(self):
        return self.name

