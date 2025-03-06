from rest_framework.views import APIView
from rest_framework.response import Response
from .models import PrivacyPolicy, DataFlow
from .serializers import PrivacyPolicySerializer, DataFlowSerializer

class PrivacyPolicyList(APIView):
    def get(self, request):
        policies = PrivacyPolicy.objects.all()
        serializer = PrivacyPolicySerializer(policies, many=True)
        return Response(serializer.data)

class DataFlowList(APIView):
    def get(self, request):
        flows = DataFlow.objects.all()
        serializer = DataFlowSerializer(flows, many=True)
        return Response(serializer.data)
