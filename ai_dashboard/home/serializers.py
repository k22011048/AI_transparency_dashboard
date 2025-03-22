from rest_framework import serializers
from .models import AIModel, TrustScore

class AIModelSerializer(serializers.ModelSerializer):
    average_trust_score = serializers.SerializerMethodField()

    class Meta:
        model = AIModel
        fields = '__all__'

    def get_average_trust_score(self, obj):
        return obj.average_trust_score() or "Not Rated"



