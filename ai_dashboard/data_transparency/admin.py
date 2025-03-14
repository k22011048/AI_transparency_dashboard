from django.contrib import admin
from .models import DataCollectionInfo, PolicySummary, ComparisonData

@admin.register(DataCollectionInfo)
class DataCollectionInfoAdmin(admin.ModelAdmin):
    list_display = ('modelName', 'dataTypes', 'collectionMethods', 'usage')

@admin.register(PolicySummary)
class PolicySummaryAdmin(admin.ModelAdmin):
    list_display = ('modelName', 'summary')

@admin.register(ComparisonData)
class ComparisonDataAdmin(admin.ModelAdmin):
    list_display = ('modelName', 'dataRetentionPolicies', 'thirdPartySharing', 'regulatoryCompliance')
