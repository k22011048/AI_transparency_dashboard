from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import AIModel, TrustScore
from .serializers import AIModelSerializer

class AIModelList(APIView):
    def get(self, request):
        models = AIModel.objects.all()
        serializer = AIModelSerializer(models, many=True)
        return Response(serializer.data)


class SubmitTrustScore(APIView):
    def post(self, request, ai_model_id):
        try:
            ai_model = AIModel.objects.get(id=ai_model_id)
            score = int(request.data.get("score"))
            if 0 <= score <= 10:
                TrustScore.objects.create(ai_model=ai_model, score=score)
                return Response({"message": "Score submitted successfully."}, status=status.HTTP_201_CREATED)
            return Response({"error": "Score must be between 0 and 10."}, status=status.HTTP_400_BAD_REQUEST)
        except AIModel.DoesNotExist:
            return Response({"error": "AI model not found."}, status=status.HTTP_404_NOT_FOUND)
        except ValueError:
            return Response({"error": "Invalid score."}, status=status.HTTP_400_BAD_REQUEST)
