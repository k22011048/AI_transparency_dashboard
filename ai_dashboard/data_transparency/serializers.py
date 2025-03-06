from rest_framework import serializers
from .models import PrivacyPolicy, DataFlow

class PrivacyPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = PrivacyPolicy
        fields = '__all__'

class DataFlowSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataFlow
        fields = '__all__'
