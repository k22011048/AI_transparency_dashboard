from django.urls import path
from .views import TransparencyReportList, AuditLogList, ComplianceStatusList

urlpatterns = [
    path('reports/', TransparencyReportList.as_view(), name='transparency-report-list'),
    path('logs/', AuditLogList.as_view(), name='audit-log-list'),
    path('compliance/', ComplianceStatusList.as_view(), name='compliance-status-list'),
]
