from django.urls import path
from .views import FAQList, ChatbotQuery

urlpatterns = [
    path('faqs/', FAQList.as_view(), name='faq-list'),
    path('query/', ChatbotQuery.as_view(), name='chatbot-query'),
]
