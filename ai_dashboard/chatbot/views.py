from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Area, QuestionAnswerLog

@api_view(['GET'])
def areas_with_questions(request):
    from .serializers import AreaSerializer
    areas = Area.objects.prefetch_related('questions').all()
    serializer = AreaSerializer(areas, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def chatbot_query(request):
    question_text = request.data.get("query")

    # Generate the response for the question
    # You can replace this with more sophisticated logic (e.g., AI model or database lookup)
    answer_text = f"Response for: {question_text}"

    # Log the question and its answer to the database
    QuestionAnswerLog.objects.create(
        question_text=question_text,
        answer_text=answer_text
    )

    # Return the answer to the frontend
    return Response({"answer": answer_text})

@api_view(['POST'])
def chatbot_feedback(request):
    from .serializers import FeedbackSerializer
    serializer = FeedbackSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success"})
    return Response(serializer.errors, status=400)
