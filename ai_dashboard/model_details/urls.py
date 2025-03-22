
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrustScoreViewSet, AIModelViewSet

router = DefaultRouter()
router.register(r'ai-models', AIModelViewSet)
router.register(r'trust-scores', TrustScoreViewSet)  

urlpatterns = [
    path('', include(router.urls)),
]
