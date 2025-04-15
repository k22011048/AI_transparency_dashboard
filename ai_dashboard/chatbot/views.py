from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Area, Question, QuestionAnswerLog

@api_view(['GET'])
def areas_with_questions(request):
    from .serializers import AreaSerializer
    areas = Area.objects.prefetch_related('questions').all()
    serializer = AreaSerializer(areas, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def chatbot_query(request):
    question_text = request.data.get("query")
    try:
        question = Question.objects.get(question_text=question_text)
        answer_text = question.answer_text or "No answer provided for this question yet."
    except Question.DoesNotExist:
        answer_text = "Sorry, I couldn't find an answer to your question."

    # Log the question and answer
    QuestionAnswerLog.objects.create(
        question_text=question_text,
        answer_text=answer_text
    )
    return Response({"answer": answer_text})

@api_view(['POST'])
def chatbot_feedback(request):
    from .serializers import FeedbackSerializer
    serializer = FeedbackSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success"})
    return Response(serializer.errors, status=400)
