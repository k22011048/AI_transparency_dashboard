from django.db import models

class Scenario(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    parameters = models.JSONField()  # JSON to hold adjustable parameters like transparency, bias
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
