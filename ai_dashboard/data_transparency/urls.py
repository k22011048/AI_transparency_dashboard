from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PolicySummaryViewSet, ComparisonDataViewSet, ChartDataViewSet

router = DefaultRouter()
router.register(r'policy-summaries', PolicySummaryViewSet)  
router.register(r'comparison-data', ComparisonDataViewSet)
router.register(r'chart-data', ChartDataViewSet)

urlpatterns = [
    path('', include(router.urls)),  
]
