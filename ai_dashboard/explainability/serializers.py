from rest_framework import serializers
from .models import ModelExplainability, BiasDetection, EducationalResource

class ModelExplainabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelExplainability
        fields = '__all__'

class BiasDetectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BiasDetection
        fields = '__all__'

class EducationalResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationalResource
        fields = '__all__'
