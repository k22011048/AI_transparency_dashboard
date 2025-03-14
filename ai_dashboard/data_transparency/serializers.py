from rest_framework import serializers
from .models import DataCollectionInfo, PolicySummary, ComparisonData

class DataCollectionInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataCollectionInfo
        fields = '__all__'

class PolicySummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = PolicySummary
        fields = '__all__'

class ComparisonDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComparisonData
        fields = '__all__'
