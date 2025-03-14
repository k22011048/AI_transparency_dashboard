from django.contrib import admin
from .models import AIModel, TrustScore

@admin.register(AIModel)
class AIModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'developer', 'launchDate', 'modelSize', 'transparencyLevel')
    search_fields = ('name', 'developer')
    list_filter = ('launchDate', 'transparencyLevel')

@admin.register(TrustScore)
class TrustScoreAdmin(admin.ModelAdmin):
    list_display = ('model', 'score', 'created_at')
    search_fields = ('model__name', 'score')
    list_filter = ('model', 'created_at')
