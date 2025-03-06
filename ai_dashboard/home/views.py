from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AIModel
from .serializers import AIModelSerializer

class AIModelList(APIView):
    def get(self, request):
        models = AIModel.objects.all()
        serializer = AIModelSerializer(models, many=True)
        return Response(serializer.data)
