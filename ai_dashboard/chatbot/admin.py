from django.contrib import admin
from .models import FAQ, Feedback

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'answer')
    search_fields = ('question', 'answer')

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('feedback', 'created_at')
    search_fields = ('feedback',)
    list_filter = ('created_at',)
