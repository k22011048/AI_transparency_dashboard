from django.db import models

class PolicySummary(models.Model):
    modelName = models.CharField(max_length=100)
    summary = models.TextField()
    details = models.TextField(blank=True, null=True)  

    def __str__(self):
        return self.modelName

class ComparisonData(models.Model):
    modelName = models.CharField(max_length=100)
    dataRetentionPolicies = models.TextField()
    thirdPartySharing = models.TextField()
    regulatoryCompliance = models.TextField()
    dataStorageLocation = models.TextField(blank=True, null=True) 
    encryptionStandards = models.TextField(blank=True, null=True) 

    def __str__(self):
        return self.modelName

class ChartData(models.Model):
    modelName = models.CharField(max_length=100)
    labels = models.JSONField()
    values = models.JSONField()
    chartType = models.CharField(max_length=50, choices=[('bar', 'Bar'), ('line', 'Line'), ('pie', 'Pie')])

    def __str__(self):
        return f"{self.modelName} - {self.chartType}"
