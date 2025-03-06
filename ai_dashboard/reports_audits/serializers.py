from rest_framework import serializers
from .models import TransparencyReport, AuditLog, ComplianceStatus

class TransparencyReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransparencyReport
        fields = '__all__'

class AuditLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuditLog
        fields = '__all__'

class ComplianceStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComplianceStatus
        fields = '__all__'
