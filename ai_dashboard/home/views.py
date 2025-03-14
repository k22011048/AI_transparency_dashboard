from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from .models import AIModel
from .serializers import AIModelSerializer

# List all AI Models with dynamic sorting and filtering
class AIModelList(generics.ListAPIView):
    queryset = AIModel.objects.all()
    serializer_class = AIModelSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['company', 'transparency_level']
    ordering_fields = ['name', 'trust_score', 'last_updated']

    def get_queryset(self):
        queryset = AIModel.objects.all()
        # Implement basic filtering and sorting logic
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by:
            queryset = queryset.order_by(sort_by)
        return queryset
