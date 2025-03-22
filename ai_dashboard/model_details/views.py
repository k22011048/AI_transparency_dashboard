from rest_framework import viewsets
from .models import AIModel, TrustScore
from .serializers import AIModelSerializer, TrustScoreSerializer

class AIModelViewSet(viewsets.ModelViewSet):
    queryset = AIModel.objects.all()
    serializer_class = AIModelSerializer

class TrustScoreViewSet(viewsets.ModelViewSet):
    queryset = TrustScore.objects.all()
    serializer_class = TrustScoreSerializer

    def perform_create(self, serializer):
        score = serializer.validated_data['score']
        if 1 <= score <= 10:
            serializer.save()  
        else:
            raise serializers.ValidationError("Score must be between 1 and 10.")
