from rest_framework import serializers
from .models import  PolicySummary, ComparisonData, ChartData

class PolicySummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = PolicySummary
        fields = '__all__'

class ComparisonDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComparisonData
        fields = '__all__'

class ChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartData
        fields = '__all__'
