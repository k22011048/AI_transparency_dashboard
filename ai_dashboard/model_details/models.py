from django.db import models

class AIModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    useCases = models.TextField()
    transparencyLevel = models.CharField(max_length=100)
    developer = models.CharField(max_length=100)
    launchDate = models.DateField()
    modelSize = models.CharField(max_length=100)
    architectureDiagram = models.ImageField(upload_to='architecture_diagrams/')
    architectureDescription = models.TextField()
    trainingData = models.TextField()

    def __str__(self):
        return self.name

class TrustScore(models.Model):
    model = models.ForeignKey(AIModel, on_delete=models.CASCADE)
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.model.name} - {self.score}"
