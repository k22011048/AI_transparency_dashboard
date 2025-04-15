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
        selected_axes = scenario.selected_axes
        weightings = scenario.weightings or {}

        scores = {
            param: min(100, float(value) * weightings.get(param, 1.0))
            for param, value in parameters.items()
            if param in selected_axes
        }

        overall_score = sum(scores.values()) / len(scores)

        SimulationResult.objects.create(
            scenario=scenario,
            privacy_score=int(scores.get("privacy_level", 0)),
            security_score=int(scores.get("security_level", 0)),
            transparency_score=int(scores.get("transparency_level", 0)),
            trust_score=int(scores.get("trust_level", 0)),
            ethics_score=int(scores.get("ethics_level", 0)),
            bias_score=int(scores.get("bias_level", 0)),
            overall_score=int(overall_score)
        )

        response_data = {
            "overall_score": int(overall_score),
            **{k: int(v) for k, v in scores.items()}
        }

        return Response({
            "simulation_result": response_data,
            "selected_axes": selected_axes
        })

class SimulationResultViewSet(viewsets.ModelViewSet):
    queryset = SimulationResult.objects.all()
    serializer_class = SimulationResultSerializer
