from rest_framework.views import APIView
from rest_framework.response import Response
from .models import FAQ
from .serializers import FAQSerializer

class FAQList(APIView):
    def get(self, request):
        faqs = FAQ.objects.all()
        serializer = FAQSerializer(faqs, many=True)
        return Response(serializer.data)

class ChatbotQuery(APIView):
    def post(self, request):
        user_input = request.data.get("query", "").lower()
        faqs = FAQ.objects.all()

        for faq in faqs:
            if faq.question.lower() in user_input:
                return Response({"answer": faq.answer})

        return Response({"answer": "I'm sorry, I don't have an answer for that yet."})
