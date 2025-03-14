from django.urls import path
from .views import AIModelList

urlpatterns = [
    path('models/', AIModelList.as_view(), name='model-list'),

]
