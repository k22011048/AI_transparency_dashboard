from django.urls import path
from .views import chatbot_query, chatbot_recommend, chatbot_feedback, faq_list

urlpatterns = [
    path("query/", chatbot_query, name="chatbot_query"),
    path("recommend/", chatbot_recommend, name="chatbot_recommend"),
    path("feedback/", chatbot_feedback, name="chatbot_feedback"),
    path("faqs/", faq_list, name="faq_list"),
]
