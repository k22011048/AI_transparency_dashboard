from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import AIModel, TrustScore
from .serializers import AIModelSerializer, TrustScoreSerializer
from django.db.models import Avg, Count

class AIModelViewSet(viewsets.ModelViewSet):
    queryset = AIModel.objects.all()
    serializer_class = AIModelSerializer

    @action(detail=True, methods=['get', 'post'])
    def trust_score(self, request, pk=None):
        model