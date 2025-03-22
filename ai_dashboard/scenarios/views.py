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
        selected_axes = scenario.selected_axes  # Get the selected 3 parameters for the chart

        # Validate selected_axes
        if len(selected_axes) != 3 or not all(axis in parameters for axis in selected_axes):
            return Response({"error": "Invalid axes configuration."}, status=400)

        # Compute scores for the selected axes
        scores = {axis: float(parameters[axis]) * 1.5 for axis in selected_axes}

        # Cap scores at 100
        for axis in scores:
            scores[axis] = min(100, scores[axis])

        # Calculate overall score (average of the 3 axes)
        overall_score = sum(scores.values()) / 3

        # Save the simulation results
        result = SimulationResult.objects.create(
            scenario=scenario,
            transparency_score=int(scores.get("transparency_level", 0)),
            privacy_score=int(scores.get("privacy_level", 0)),
            security_score=int(scores.get("security_level", 0)),
            bias_mitigation_score=int(scores.get("bias_mitigation_level", 0)),
            overall_score=int(overall_score)
        )

        # Serialize and return results
        serializer = SimulationResultSerializer(result)
        return Response({'simulation_result': serializer.data})

class SimulationResultViewSet(viewsets.ModelViewSet):
    """
    A ViewSet for managing simulation results.
    """
    queryset = SimulationResult.objects.all()
    serializer_class = SimulationResultSerializer
