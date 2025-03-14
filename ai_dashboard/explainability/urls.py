from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ModelExplainabilityViewSet, BiasDetectionViewSet, EducationalResourceViewSet

router = DefaultRouter()
router.register(r'model-explainability', ModelExplainabilityViewSet)
router.register(r'bias-detection', BiasDetectionViewSet)
router.register(r'educational-resources', EducationalResourceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
