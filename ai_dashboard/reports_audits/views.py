from rest_framework.views import APIView
from rest_framework.response import Response
from .models import TransparencyReport, AuditLog, ComplianceStatus
from .serializers import TransparencyReportSerializer, AuditLogSerializer, ComplianceStatusSerializer

class TransparencyReportList(APIView):
    def get(self, request):
        reports = TransparencyReport.objects.all()
        serializer = TransparencyReportSerializer(reports, many=True)
        return Response(serializer.data)

class AuditLogList(APIView):
    def get(self, request):
        logs = AuditLog.objects.all()
        serializer = AuditLogSerializer(logs, many=True)
        return Response(serializer.data)

class ComplianceStatusList(APIView):
    def get(self, request):
        statuses = ComplianceStatus.objects.all()
        serializer = ComplianceStatusSerializer(statuses, many=True)
        return Response(serializer.data)
