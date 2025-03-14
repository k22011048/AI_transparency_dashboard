from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransparencyReportViewSet, RegulatoryComplianceLinkViewSet, AuditLogViewSet

router = DefaultRouter()
router.register(r'transparency-reports', TransparencyReportViewSet)
router.register(r'regulatory-compliance-links', RegulatoryComplianceLinkViewSet)
router.register(r'audit-logs', AuditLogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
