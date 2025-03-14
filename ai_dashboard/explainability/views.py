from rest_framework import viewsets
from .models import ModelExplainability, BiasDetection, EducationalResource
from .serializers import ModelExplainabilitySerializer, BiasDetectionSerializer, EducationalResourceSerializer

class ModelExplainabilityViewSet(viewsets.ModelViewSet):
    queryset = ModelExplainability.objects.all()
    serializer_class = ModelExplainabilitySerializer

class BiasDetectionViewSet(viewsets.ModelViewSet):
    queryset = BiasDetection.objects.all()
    serializer_class = BiasDetectionSerializer

class EducationalResourceViewSet(viewsets.ModelViewSet):
    queryset = EducationalResource.objects.all()
    serializer_class = EducationalResourceSerializer
