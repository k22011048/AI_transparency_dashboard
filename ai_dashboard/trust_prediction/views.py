from rest_framework import viewsets
from rest_framework.response import Response
from .models import Criterion, UserScore
from .serializers import CriterionSerializer, UserScoreSerializer
from django.db.models import Avg

class CriterionViewSet(viewsets.ModelViewSet):
    queryset = Criterion.objects.all()
    serializer_class = CriterionSerializer

class UserScoreViewSet(viewsets.ModelViewSet):
    queryset = UserScore.objects.all()
    serializer_class = UserScoreSerializer

class SavedScoresViewSet(viewsets.ViewSet):
    def list(self, request):
        scores = UserScore.objects.values('criterion__name').annotate(average_score=Avg('score'))
        return Response(scores)
