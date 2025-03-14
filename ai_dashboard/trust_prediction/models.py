from django.db import models

class Criterion(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class UserScore(models.Model):
    criterion = models.ForeignKey(Criterion, on_delete=models.CASCADE)
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.criterion.name} - {self.score}"
