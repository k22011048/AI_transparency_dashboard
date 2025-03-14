from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DataCollectionInfoViewSet, PolicySummaryViewSet, ComparisonDataViewSet

router = DefaultRouter()
router.register(r'data-collection', DataCollectionInfoViewSet)
router.register(r'policy-summaries', PolicySummaryViewSet)
router.register(r'comparison-data', ComparisonDataViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
