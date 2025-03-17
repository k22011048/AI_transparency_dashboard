from django.contrib import admin
from .models import Area, Question, QuestionAnswerLog, Feedback

@admin.register(Area)
class AreaAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['area', 'question_text', 'answer_text']  # Add 'answer_text'


@admin.register(QuestionAnswerLog)
class QuestionAnswerLogAdmin(admin.ModelAdmin):
    list_display = ['question_text', 'answer_text', 'created_at']
    search_fields = ['question_text', 'answer_text']
    list_filter = ['created_at']

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['feedback', 'created_at']
    search_fields = ['feedback']
    list_filter = ['created_at']

