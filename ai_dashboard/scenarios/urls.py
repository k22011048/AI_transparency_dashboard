from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ScenarioViewSet, SimulationResultViewSet

router = DefaultRouter()
router.register(r'scenarios', ScenarioViewSet)
router.register(r'simulation_results', SimulationResultViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
