from rest_framework import viewsets
from .models import PolicySummary, ComparisonData, ChartData
from .serializers import PolicySummarySerializer, ComparisonDataSerializer, ChartDataSerializer


class PolicySummaryViewSet(viewsets.ModelViewSet):
    queryset = PolicySummary.objects.all()
    serializer_class = PolicySummarySerializer


class ComparisonDataViewSet(viewsets.ModelViewSet):
    queryset = ComparisonData.objects.all()
    serializer_class = ComparisonDataSerializer


class ChartDataViewSet(viewsets.ModelViewSet):
    queryset = ChartData.objects.all()
    serializer_class = ChartDataSerializer
