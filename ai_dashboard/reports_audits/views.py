from rest_framework import viewsets
from .models import TransparencyReport, RegulatoryComplianceLink, AuditLog, Milestone, ComplianceStatus, Certification
from .serializers import (
    TransparencyReportSerializer,
    RegulatoryComplianceLinkSerializer,
    AuditLogSerializer,
    MilestoneSerializer,
    ComplianceStatusSerializer,
    CertificationSerializer
)

class TransparencyReportViewSet(viewsets.ModelViewSet):
    queryset = TransparencyReport.objects.all()
    serializer_class = TransparencyReportSerializer

class RegulatoryComplianceLinkViewSet(viewsets.ModelViewSet):
    queryset = RegulatoryComplianceLink.objects.all()
    serializer_class = RegulatoryComplianceLinkSerializer

class AuditLogViewSet(viewsets.ModelViewSet):
    queryset = AuditLog.objects.all()
    serializer_class = AuditLogSerializer

class MilestoneViewSet(viewsets.ModelViewSet):
    queryset = Milestone.objects.all()
    serializer_class = MilestoneSerializer

class ComplianceStatusViewSet(viewsets.ModelViewSet):
    queryset = ComplianceStatus.objects.all()
    serializer_class = ComplianceStatusSerializer

class CertificationViewSet(viewsets.ModelViewSet):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer
