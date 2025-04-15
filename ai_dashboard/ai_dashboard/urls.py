"""
URL configuration for ai_dashboard project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views 
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse

urlpatterns = [
    path('', views.homepage, name='home'),  # Add this for the root URL
    path('home/', include('home.urls')),  # Include URLs for the "Home" app
    path('details/', include('model_details.urls')),
    path('data-transparency/', include('data_transparency.urls')),
    path('ai-recommendation/', include('ai_recommendation.urls')),
    path('chatbot/', include('chatbot.urls')),
    path('reports-audits/', include('reports_audits.urls')),
    path('explainability/', include('explainability.urls')),
    path('api/', include('scenarios.urls')),
    path('api/data-transparency/', include('data_transparency.urls')),
    path('api/features/', include('ai_recommendation.urls')),
    path('api/ai-models/', include('model_details.urls')),
    path('api/reports-audits/', include ('reports_audits.urls')),
    path('admin/', admin.site.urls),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

