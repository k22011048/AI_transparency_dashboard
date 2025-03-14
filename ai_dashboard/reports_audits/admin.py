from django.contrib import admin
from .models import TransparencyReport, RegulatoryComplianceLink, AuditLog

@admin.register(TransparencyReport)
class TransparencyReportAdmin(admin.ModelAdmin):
    list_display = ('month', 'score', 'created_at')
    search_fields = ('month',)
    list_filter = ('created_at',)

@admin.register(RegulatoryComplianceLink)
class RegulatoryComplianceLinkAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'description', 'created_at')
    search_fields = ('name', 'description')
    list_filter = ('created_at',)

@admin.register(AuditLog)
class AuditLogAdmin(admin.ModelAdmin):
    list_display = ('timestamp', 'event', 'details')
    search_fields = ('event', 'details')
    list_filter = ('timestamp',)
