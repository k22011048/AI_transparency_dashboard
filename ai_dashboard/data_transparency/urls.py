from django.urls import path
from .views import PrivacyPolicyList, DataFlowList

urlpatterns = [
    path('policies/', PrivacyPolicyList.as_view(), name='privacy-policy-list'),
    path('data-flows/', DataFlowList.as_view(), name='data-flow-list'),
]
