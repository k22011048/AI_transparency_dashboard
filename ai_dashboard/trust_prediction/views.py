from rest_framework.views import APIView
from rest_framework.response import Response
from .models import TrustFactor, PredefinedScenario
from .serializers import TrustFactorSerializer, PredefinedScenarioSerializer

class TrustFactorList(APIView):
    def get(self, request):
        factors = TrustFactor.objects.all()
        serializer = TrustFactorSerializer(factors, many=True)
        return Response(serializer.data)

class ScenarioList(APIView):
    def get(self, request):
        scenarios = PredefinedScenario.objects.all()
        serializer = PredefinedScenarioSerializer(scenarios, many=True)
        return Response(serializer.data)
