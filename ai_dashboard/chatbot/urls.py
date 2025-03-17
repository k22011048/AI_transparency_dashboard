from django.urls import path
from .views import areas_with_questions, chatbot_query, chatbot_feedback

urlpatterns = [
    path("areas/", areas_with_questions, name="areas_with_questions"),
    path("query/", chatbot_query, name="chatbot_query"),
    path("feedback/", chatbot_feedback, name="chatbot_feedback"),
]
