from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DecisionProcess, BiasMetric
from .serializers import DecisionProcessSerializer, BiasMetricSerializer

class DecisionProcessList(APIView):
    def get(self, request):
        processes = DecisionProcess.objects.all()
        serializer = DecisionProcessSerializer(processes, many=True)
        return Response(serializer.data)

class BiasMetricList(APIView):
    def get(self, request):
        metrics = BiasMetric.objects.all()
        serializer = BiasMetricSerializer(metrics, many=True)
        return Response(serializer.data)
