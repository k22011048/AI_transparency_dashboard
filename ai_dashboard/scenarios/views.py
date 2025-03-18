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
        
        # Define parameter weights for each score
        transparency_weight = float(parameters.get('transparency_level', 50)) * 0.6
        privacy_weight = float(parameters.get('data_limitation', 50)) * 0.4
        bias_detection_weight = float(parameters.get('bias_detection_accuracy', 50)) * 0.5
        cultural_sensitivity_weight = float(parameters.get('cultural_sensitivity', 50)) * 0.3
        fairness_weight = float(parameters.get('framework_adoption', 50)) * 0.7
        
        # Compute the scores with weighted factors
        transparency_score = min(100, transparency_weight + fairness_weight)
        privacy_score = min(100, privacy_weight + cultural_sensitivity_weight)
        bias_mitigation_score = min(100, bias_detection_weight + fairness_weight)

        # Save the results
        result = SimulationResult.objects.create(
            scenario=scenario,
            transparency_score=int(transparency_score),
            privacy_score=int(privacy_score),
            bias_mitigation_score=int(bias_mitigation_score)
        )

        # Return serialized result
        serializer = SimulationResultSerializer(result)
        return Response({'simulation_result': serializer.data})

class SimulationResultViewSet(viewsets.ModelViewSet):
    queryset = SimulationResult.objects.all()
    serializer_class = SimulationResultSerializer
