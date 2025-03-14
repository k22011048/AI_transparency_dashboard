from rest_framework import viewsets
from .models import TransparencyReport, RegulatoryComplianceLink, AuditLog
from .serializers import TransparencyReportSerializer, RegulatoryComplianceLinkSerializer, AuditLogSerializer

class TransparencyReportViewSet(viewsets.ModelViewSet):
    queryset = TransparencyReport.objects.all()
    serializer_class = TransparencyReportSerializer

class RegulatoryComplianceLinkViewSet(viewsets.ModelViewSet):
    queryset = RegulatoryComplianceLink.objects.all()
    serializer_class = RegulatoryComplianceLinkSerializer

class AuditLogViewSet(viewsets.ModelViewSet):
    queryset = AuditLog.objects.all()
    serializer_class = AuditLogSerializer
