from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Scenario
from .serializers import ScenarioSerializer

class ScenarioList(APIView):
    # Fetch all scenarios (predefined and user-generated)
    def get(self, request):
        scenarios = Scenario.objects.all()
        serializer = ScenarioSerializer(scenarios, many=True)
        return Response(serializer.data)

class ScenarioDetail(APIView):
    # Fetch a specific scenario by ID
    def get(self, request, pk):
        try:
            scenario = Scenario.objects.get(pk=pk)
            serializer = ScenarioSerializer(scenario)
            return Response(serializer.data)
        except Scenario.DoesNotExist:
            return Response({'error': 'Scenario not found'}, status=status.HTTP_404_NOT_FOUND)

class ScenarioCreate(APIView):
    # Create a new user-defined scenario
    def post(self, request):
        serializer = ScenarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ScenarioSimulation(APIView):
    # Simulate a what-if scenario outcome based on parameters
    def post(self, request):
        parameters = request.data.get("parameters", {})
        # Logic for scenario simulation (for example purposes, dummy logic here):
        result = {
            "transparency_score": parameters.get("transparency", 5) * 2,
            "bias_mitigation_score": parameters.get("bias_mitigation", 5) * 1.5,
            "privacy_score": parameters.get("privacy", 5) * 1.8,
        }
        return Response({"simulation_result": result})
