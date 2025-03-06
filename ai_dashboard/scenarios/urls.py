from django.urls import path
from .views import ScenarioList, ScenarioDetail, ScenarioCreate, ScenarioSimulation

urlpatterns = [
    path('scenarios/', ScenarioList.as_view(), name='scenario-list'),  # List all scenarios
    path('scenarios/<int:pk>/', ScenarioDetail.as_view(), name='scenario-detail'),  # Scenario details
    path('scenarios/create/', ScenarioCreate.as_view(), name='scenario-create'),  # Create new scenario
    path('scenarios/simulate/', ScenarioSimulation.as_view(), name='scenario-simulate'),  # Simulate outcomes
]
