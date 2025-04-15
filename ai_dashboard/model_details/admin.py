from django.contrib import admin
from .models import AIModel

@admin.register(AIModel)
class AIModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'developer', 'launchDate', 'modelSize', 'transparencyLevel')
    search_fields = ('name', 'developer')
    list_filter = ('launchDate', 'transparencyLevel')


