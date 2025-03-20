from django.contrib import admin
from .models import Feature

@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = ('name', 'recommended_model')
    search_fields = ('name',)
