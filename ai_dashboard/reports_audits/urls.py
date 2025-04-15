from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    TransparencyReportViewSet,
    RegulatoryComplianceLinkViewSet,
    AuditLogViewSet,
    MilestoneViewSet,
    ComplianceStatusViewSet,
    CertificationViewSet
)

router = DefaultRouter()
router.register(r'transparency-reports', TransparencyReportViewSet)
router.register(r'regulatory-compliance-links', RegulatoryComplianceLinkViewSet)
router.register(r'audit-logs', AuditLogViewSet)
router.register(r'milestones', MilestoneViewSet)
router.register(r'compliance-statuses', ComplianceStatusViewSet)
router.register(r'certifications', CertificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
