from django.contrib import admin
from .models import TransparencyReport, AuditLog, ComplianceStatus

admin.site.register(TransparencyReport)
admin.site.register(AuditLog)
admin.site.register(ComplianceStatus)
