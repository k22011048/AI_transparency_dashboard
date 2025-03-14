from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Feedback, FAQ
from .serializers import FeedbackSerializer, FAQSerializer

@api_view(['POST'])
def chatbot_query(request):
    query = request.data.get("query")
    answer = process_query(query)
    return Response({"answer": answer})

@api_view(['POST'])
def chatbot_recommend(request):
    query = request.data.get("query")
    recommendation = generate_recommendation(query)
    return Response({"recommendation": recommendation})

@api_view(['POST'])
def chatbot_feedback(request):
    serializer = FeedbackSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success"})
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def faq_list(request):
    faqs = FAQ.objects.all()
    serializer = FAQSerializer(faqs, many=True)
    return Response(serializer.data)

def process_query(query):
    return "This is the response to your query."

def generate_recommendation(query):
    return "This is the recommendation based on your query."
