import os
import django

# Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ai_dashboard.settings")
django.setup()

from data_transparency.models import PolicySummary, ComparisonData, ChartData

def populate_data_transparency():
    # Policy Summaries
    policy_summaries = [
        {"modelName": "ChatGPT", "summary": "OpenAI collects data to improve its services. Users can opt out of certain data collection via settings."},
        {"modelName": "Microsoft Copilot", "summary": "Adheres to Microsoft privacy standards, including GDPR and HIPAA compliance for enterprise data."},
        {"modelName": "Gemini", "summary": "Focuses on transparency in data collection with multimodal privacy controls and safeguards."},
        {"modelName": "DeepSeek", "summary": "Data collected is anonymized and used solely to improve search algorithms and user experience."},
        {"modelName": "Claude", "summary": "Prioritizes privacy with minimal data retention and no third-party sharing."},
        {"modelName": "Perplexity", "summary": "Collects user queries for generating responses but ensures privacy with strict compliance policies."},
    ]

    # Comparison Data
    comparison_data = [
        {"modelName": "ChatGPT", "dataRetentionPolicies": "30 days", "thirdPartySharing": "No direct sharing", "regulatoryCompliance": "Compliant with GDPR, CCPA"},
        {"modelName": "Microsoft Copilot", "dataRetentionPolicies": "Enterprise-defined retention policies", "thirdPartySharing": "No sharing beyond organization boundaries", "regulatoryCompliance": "Compliant with GDPR, HIPAA"},
        {"modelName": "Gemini", "dataRetentionPolicies": "60 days", "thirdPartySharing": "Aggregated and anonymized data shared for research", "regulatoryCompliance": "Compliant with GDPR"},
        {"modelName": "DeepSeek", "dataRetentionPolicies": "90 days", "thirdPartySharing": "Anonymized data shared with partners", "regulatoryCompliance": "Adheres to privacy directives like GDPR"},
        {"modelName": "Claude", "dataRetentionPolicies": "Session-based (no long-term storage)", "thirdPartySharing": "None", "regulatoryCompliance": "Focus on data minimization principles"},
        {"modelName": "Perplexity", "dataRetentionPolicies": "7 days", "thirdPartySharing": "None", "regulatoryCompliance": "Fully compliant with GDPR and CCPA"},
    ]

    # Chart Data
    chart_data = [
        {
            "modelName": "Data Retention Comparison",
            "labels": ["ChatGPT", "Microsoft Copilot", "Gemini", "DeepSeek", "Claude", "Perplexity"],
            "values": [30, 45, 60, 90, 0, 7],
            "chartType": "bar"
        }
    ]

    # Populate PolicySummary
    for summary in policy_summaries:
        PolicySummary.objects.get_or_create(**summary)

    # Populate ComparisonData
    for comparison in comparison_data:
        ComparisonData.objects.get_or_create(**comparison)

    # Populate ChartData
    for chart in chart_data:
        ChartData.objects.get_or_create(**chart)

if __name__ == "__main__":
    populate_data_transparency()
    print("Data Transparency data population complete!")
