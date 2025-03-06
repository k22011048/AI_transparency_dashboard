from django.db import models

class TransparencyReport(models.Model):
    ai_model = models.ForeignKey('home.AIModel', on_delete=models.CASCADE)
    report_date = models.DateField()
    transparency_score = models.FloatField()

class AuditLog(models.Model):
    ai_model = models.ForeignKey('home.AIModel', on_delete=models.CASCADE)
    change_description = models.TextField()
    change_date = models.DateField()

class ComplianceStatus(models.Model):
    ai_model = models.ForeignKey('home.AIModel', on_delete=models.CASCADE)
    regulation = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=[('Compliant', 'Compliant'), ('Non-Compliant', 'Non-Compliant')])
    last_checked = models.DateField()
