from rest_framework import serializers
from .models import TransparencyReport, RegulatoryComplianceLink, AuditLog, Milestone, ComplianceStatus, Certification

class TransparencyReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransparencyReport
        fields = '__all__'

class RegulatoryComplianceLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegulatoryComplianceLink
        fields = '__all__'

class AuditLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuditLog
        fields = '__all__'

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = '__all__'

class ComplianceStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComplianceStatus
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'
