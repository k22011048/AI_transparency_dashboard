from rest_framework import serializers
from .models import Area, Question, Feedback, QuestionAnswerLog

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question_text']

class AreaSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Area
        fields = ['id', 'name', 'questions']


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

class QuestionAnswerLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionAnswerLog
        fields = ['id', 'question_text', 'answer_text', 'created_at']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question_text', 'answer_text']  
