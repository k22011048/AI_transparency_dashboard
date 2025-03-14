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
