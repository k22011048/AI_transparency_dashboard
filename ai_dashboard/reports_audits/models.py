from django.db import models

class TransparencyReport(models.Model):
    month = models.CharField(max_length=7)  # e.g., '2023-01'
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.month} - {self.score}"

class RegulatoryComplianceLink(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class AuditLog(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    event = models.CharField(max_length=200)
    details = models.TextField()

    def __str__(self):
        return f"{self.timestamp} - {self.event}"
