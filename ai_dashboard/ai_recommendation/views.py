from django.http import JsonResponse
from .models import Feature
from rest_framework.response import Response
from rest_framework.views import APIView

class FeatureListView(APIView):
    def get(self, request):
        features = Feature.objects.all()

        # If no features exist, return an empty list with a 200 status.
        if not features.exists():
            return Response([], status=200)

        # Otherwise, return serialized data
        from .serializers import FeatureSerializer
        serializer = FeatureSerializer(features, many=True)
        return Response(serializer.data)
