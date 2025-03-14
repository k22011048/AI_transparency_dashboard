from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AIModelViewSet

router = DefaultRouter()
router.register(r'models', AIModelViewSet)

urlpatterns = [
    path('details', include(router.urls)),
]
