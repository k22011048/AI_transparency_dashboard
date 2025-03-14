from rest_framework import serializers
from .models import TransparencyReport, RegulatoryComplianceLink, AuditLog

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
