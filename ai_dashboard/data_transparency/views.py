from rest_framework import viewsets
from .models import DataCollectionInfo, PolicySummary, ComparisonData
from .serializers import DataCollectionInfoSerializer, PolicySummarySerializer, ComparisonDataSerializer

class DataCollectionInfoViewSet(viewsets.ModelViewSet):
    queryset = DataCollectionInfo.objects.all()
    serializer_class = DataCollectionInfoSerializer

class PolicySummaryViewSet(viewsets.ModelViewSet):
    queryset = PolicySummary.objects.all()
    serializer_class = PolicySummarySerializer

class ComparisonDataViewSet(viewsets.ModelViewSet):
    queryset = ComparisonData.objects.all()
    serializer_class = ComparisonDataSerializer
