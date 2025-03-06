from rest_framework import serializers
from .models import TrustFactor, PredefinedScenario

class TrustFactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrustFactor
        fields = '__all__'

class PredefinedScenarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = PredefinedScenario
        fields = '__all__'
