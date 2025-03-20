from rest_framework import viewsets
from .models import AIModel, TrustScore
from .serializers import AIModelSerializer, TrustScoreSerializer

class AIModelViewSet(viewsets.ModelViewSet):
    queryset = AIModel.objects.all()
    serializer_class = AIModelSerializer

class TrustScoreViewSet(viewsets.ModelViewSet):
    queryset = TrustScore.objects.all()
    serializer_class = TrustScoreSerializer
