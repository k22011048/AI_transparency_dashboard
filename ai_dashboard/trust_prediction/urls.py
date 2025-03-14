from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CriterionViewSet, UserScoreViewSet, SavedScoresViewSet

router = DefaultRouter()
router.register(r'criteria', CriterionViewSet)
router.register(r'user-scores', UserScoreViewSet)
router.register(r'saved-scores', SavedScoresViewSet, basename='saved-scores')

urlpatterns = [
    path('', include(router.urls)),
]
