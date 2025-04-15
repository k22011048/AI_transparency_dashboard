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
        }

        overall_score = sum(scores[axis] for axis in selected_axes) / len(selected_axes)

        SimulationResult.objects.create(
            scenario=scenario,
            transparency_score=int(scores.get("transparency_level", 0)),
            privacy_score=int(scores.get("privacy_level", 0)),
            security_score=int(scores.get("security_level", 0)),
            bias_mitigation_score=int(scores.get("bias_mitigation_level", 0)),
            fairness_score=int(scores.get("fairness_level", 0)),
            user_control_score=int(scores.get("user_control_level", 0)),
            auditability_score=int(scores.get("auditability_level", 0)),
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
