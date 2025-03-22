from django.contrib import admin
from .models import PolicySummary, ComparisonData

@admin.register(PolicySummary)
class PolicySummaryAdmin(admin.ModelAdmin):
    list_display = ('modelName', 'summary')

@admin.register(ComparisonData)
class ComparisonDataAdmin(admin.ModelAdmin):
    list_display = ('modelName', 'dataRetentionPolicies', 'thirdPartySharing', 'regulatoryCompliance')
