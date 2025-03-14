from django.contrib import admin
from .models import Criterion, UserScore

@admin.register(Criterion)
class CriterionAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name', 'description')

@admin.register(UserScore)
class UserScoreAdmin(admin.ModelAdmin):
    list_display = ('criterion', 'score', 'created_at')
    list_filter = ('criterion', 'created_at')
    search_fields = ('criterion__name', 'score')
