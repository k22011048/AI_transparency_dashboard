from django.contrib import admin
from .models import DecisionProcess, BiasMetric

admin.site.register(DecisionProcess)
admin.site.register(BiasMetric)
