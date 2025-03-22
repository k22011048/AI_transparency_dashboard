from django.db import models

class DataCollectionInfo(models.Model):
    modelName = models.CharField(max_length=100)
    dataTypes = models.TextField()
    collectionMethods = models.TextField()
    usage = models.TextField()

    def __str__(self):
        return self.modelName

class PolicySummary(models.Model):
    modelName = models.CharField(max_length=100)
    summary = models.TextField()

    def __str__(self):
        return self.modelName

class ComparisonData(models.Model):
    modelName = models.CharField(max_length=100)
    dataRetentionPolicies = models.TextField()
    thirdPartySharing = models.TextField()
    regulatoryCompliance = models.TextField()

    def __str__(self):
        return self.modelName


class ChartData(models.Model):
    modelName = models.CharField(max_length=100)
    labels = models.JSONField()  # Labels for the chart (e.g., ["Model A", "Model B"])
    values = models.JSONField()  # Values corresponding to the labels (e.g., [30, 45])
    chartType = models.CharField(max_length=50, choices=[('bar', 'Bar'), ('line', 'Line'), ('pie', 'Pie')])

    def __str__(self):
        return f"{self.modelName} - {self.chartType}"

