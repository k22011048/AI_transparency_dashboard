from django.contrib import admin
from .models import PrivacyPolicy, DataFlow

admin.site.register(PrivacyPolicy)
admin.site.register(DataFlow)
