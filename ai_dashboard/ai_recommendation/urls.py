from django.urls import path
from .views import FeatureListView

urlpatterns = [
    path('', FeatureListView.as_view(), name='feature-list'),  # '' means it'll match the base path
]
