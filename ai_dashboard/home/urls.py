from django.urls import path
from .views import AIModelList, SubmitTrustScore

urlpatterns = [
    path('models/', AIModelList.as_view(), name='model-list'),
    path('models/<int:ai_model_id>/submit-score/', SubmitTrustScore.as_view(), name='submit-score'),
]
