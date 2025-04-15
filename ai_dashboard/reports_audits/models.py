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

class Milestone(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=200)
    description = models.TextField()
    event_type = models.CharField(max_length=50)  # e.g., 'Policy Update', 'Regulatory Response', 'Public Reaction'

    def __str__(self):
        return f"{self.date} - {self.title}"

class ComplianceStatus(models.Model):
    regulation = models.CharField(max_length=50)  # e.g., 'GDPR', 'CCPA', 'HIPAA'
    status = models.CharField(max_length=20)  # e.g., 'Compliant', 'Non-Compliant', 'Pending'
    last_updated = models.DateField()

    def __str__(self):
        return f"{self.regulation} - {self.status}"

class Certification(models.Model):
    name = models.CharField(max_length=100)  # e.g., 'ISO 27001'
    status = models.CharField(max_length=20)  # e.g., 'Certified', 'In Progress', 'Not Certified'
    issued_date = models.DateField(null=True, blank=True)
    expiry_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.status}"
