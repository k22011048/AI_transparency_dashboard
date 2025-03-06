from rest_framework import serializers
from .models import DecisionProcess, BiasMetric

class DecisionProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = DecisionProcess
        fields = '__all__'

class BiasMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = BiasMetric
        fields = '__all__'
