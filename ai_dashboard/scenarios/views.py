from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Scenario, SimulationResult
from .serializers import ScenarioSerializer, SimulationResultSerializer

class ScenarioViewSet(viewsets.ModelViewSet):
    queryset = Scenario.objects.all()
    serializer_class = ScenarioSerializer

    @action(detail=True, methods=['post'])
    def simulate(self, request, pk=None):
        scenario = self.get_object()
        parameters = request.data.get('parameters', {})
        
        # Simulate results (dummy implementation for now)
        transparency_score = int(parameters.get('parameter1', 50))
        privacy_score = int(parameters.get('parameter2', 50))
        bias_mitigation_score = (transparency_score + privacy_score) // 2
        
        result = SimulationResult.objects.create(
            scenario=scenario,
            transparency_score=transparency_score,
            privacy_score=privacy_score,
            bias_mitigation_score=bias_mitigation_score
        )

        serializer = SimulationResultSerializer(result)
        return Response({'simulation_result': serializer.data})

class SimulationResultViewSet(viewsets.ModelViewSet):
    queryset = SimulationResult.objects.all()
    serializer_class = SimulationResultSerializer
