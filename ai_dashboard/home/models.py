from django.db import models

class AIModel(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    use_cases = models.TextField()
    transparency_level = models.CharField(max_length=10)  # High / Medium / Low

    def __str__(self):
        return self.name

    def average_trust_score(self):
        scores = self.trust_scores.all()
        return sum(score.score for score in scores) / scores.count() if scores.exists() else None


class TrustScore(models.Model):
    ai_model = models.ForeignKey(AIModel, on_delete=models.CASCADE, related_name='trust_scores')
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
