from django.urls import path
from .views import DecisionProcessList, BiasMetricList

urlpatterns = [
    path('decision-processes/', DecisionProcessList.as_view(), name='decision-process-list'),
    path('bias-metrics/', BiasMetricList.as_view(), name='bias-metric-list'),
]
