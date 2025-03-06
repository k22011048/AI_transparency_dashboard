from django.urls import path
from .views import TrustFactorList, ScenarioList

urlpatterns = [
    path('factors/', TrustFactorList.as_view(), name='trust-factor-list'),
    path('scenarios/', ScenarioList.as_view(), name='scenario-list'),
]
