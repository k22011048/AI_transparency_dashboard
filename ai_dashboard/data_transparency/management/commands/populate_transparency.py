from django.core.management.base import BaseCommand
from data_transparency.models import PolicySummary, ComparisonData, ChartData

class Command(BaseCommand):
    help = 'Clears and Populates Data Transparency models'

    def handle(self, *args, **kwargs):
        PolicySummary.objects.all().delete()
        ComparisonData.objects.all().delete()
        ChartData.objects.all().delete()

        self.stdout.write(self.style.WARNING("Existing data cleared."))

        policy_summaries = [
            {
                "modelName": "ChatGPT",
                "summary": "OpenAI collects data to improve its services.",
                "details": (
                    "OpenAI collects user data including conversations, metadata, and device information "
                    "to enhance model performance, fix bugs, and monitor misuse. For privacy-conscious users, "
                    "there is an option to disable chat history, preventing storage of past interactions. "
                    "Enterprise solutions offer advanced data controls, including customizable data retention periods "
                    "and user-specific privacy configurations. OpenAI complies with GDPR and CCPA regulations."
                )
            },
            {
                "modelName": "Microsoft Copilot",
                "summary": "Adheres to Microsoft privacy standards.",
                "details": (
                    "Microsoft Copilot leverages Microsoft's trusted data handling practices. All user data is encrypted "
                    "in transit and at rest, and enterprise data remains confined to its tenant boundaries. "
                    "Microsoft ensures compliance with major regulatory frameworks including GDPR, HIPAA, and SOC certifications. "
                    "Data access is governed by strict role-based access controls, and transparency portals allow organizations "
                    "to audit their data flows and storage practices in real time."
                )
            },
            {
                "modelName": "Gemini",
                "summary": "Focuses on multimodal transparency.",
                "details": (
                    "Gemini, developed by Google DeepMind, places strong emphasis on transparency and user control. "
                    "Data collected spans text, image, and voice modalities, all governed by user-defined privacy preferences. "
                    "Advanced anonymization techniques are applied, and users can manage their data visibility settings within the platform. "
                    "Gemini complies with GDPR standards, focusing on privacy by design and giving users granular control over data retention "
                    "and sharing preferences."
                )
            },
            {
                "modelName": "DeepSeek",
                "summary": "Data collected is anonymized and used solely to improve search algorithms and user experience.",
                "details": (
                    "DeepSeek collects user input data to enhance its search algorithms and user interaction models. "
                    "While the platform states that data is anonymized, storage servers are located in China, which may raise data sovereignty concerns. "
                    "Data retention is typically indefinite, unless specified otherwise by users. DeepSeek complies with local cybersecurity regulations "
                    "and offers minimal data export or deletion options for users outside China."
                )
            },
            {
                "modelName": "Claude",
                "summary": "Prioritizes privacy with minimal data retention and no third-party sharing.",
                "details": (
                    "Claude, developed by Anthropic, follows strong privacy-first principles. User data is retained only for as long as necessary "
                    "to fulfill service obligations. There is a strong focus on limiting data collection and preventing third-party sharing. "
                    "Claude also enables users to request deletion of all their stored data at any time. Data security is reinforced through "
                    "encryption in transit and at rest, while regulatory compliance aligns with GDPR and similar frameworks."
                )
            },
            {
                "modelName": "Perplexity",
                "summary": "Collects user queries for generating responses but ensures privacy with strict compliance policies.",
                "details": (
                    "Perplexity collects user queries and limited metadata for response generation and service improvements. "
                    "However, the platform follows a minimal retention policy, automatically deleting user data within 30 days of account deletion. "
                    "All collected data is stored securely in US-based servers with robust encryption standards. "
                    "Perplexity is fully compliant with GDPR and CCPA regulations, and does not engage in third-party data selling or extensive sharing."
                )
            }
        ]

        comparison_data = [
            {
                "modelName": "ChatGPT",
                "dataRetentionPolicies": "30 days",
                "thirdPartySharing": "Limited sharing with third parties for legal obligations and service improvements.",
                "regulatoryCompliance": "Compliant with GDPR, CCPA",
                "dataStorageLocation": "US & EU Data Centers",
                "encryptionStandards": "TLS, AES-256"
            },
            {
                "modelName": "Microsoft Copilot",
                "dataRetentionPolicies": "Enterprise-defined retention policies",
                "thirdPartySharing": "No sharing beyond organization boundaries",
                "regulatoryCompliance": "Compliant with GDPR, HIPAA",
                "dataStorageLocation": "Regional Tenant-Based",
                "encryptionStandards": "TLS 1.2+, AES-GCM"
            },
            {
                "modelName": "Gemini",
                "dataRetentionPolicies": "User-defined (3 to 36 months)",
                "thirdPartySharing": "Aggregated and anonymized data shared for research",
                "regulatoryCompliance": "Compliant with GDPR",
                "dataStorageLocation": "EU",
                "encryptionStandards": "End-to-end encrypted"
            },
            {
                "modelName": "DeepSeek",
                "dataRetentionPolicies": "Indefinite retention as per service requirements",
                "thirdPartySharing": "Data may be shared with third parties under legal circumstances",
                "regulatoryCompliance": "Subject to Chinese cybersecurity laws",
                "dataStorageLocation": "China",
                "encryptionStandards": "Standard encryption protocols"
            },
            {
                "modelName": "Claude",
                "dataRetentionPolicies": "As long as account remains active",
                "thirdPartySharing": "No third-party sharing",
                "regulatoryCompliance": "Compliant with GDPR",
                "dataStorageLocation": "US-based servers",
                "encryptionStandards": "TLS, AES-256"
            },
            {
                "modelName": "Perplexity",
                "dataRetentionPolicies": "Until account deletion",
                "thirdPartySharing": "Minimized third-party data sharing",
                "regulatoryCompliance": "Compliant with GDPR",
                "dataStorageLocation": "US-based servers",
                "encryptionStandards": "TLS, AES-256"
            }
        ]

        chart_data = [
            {
                "modelName": "Data Retention Comparison",
                "labels": ["ChatGPT", "Microsoft Copilot", "Gemini", "DeepSeek", "Claude", "Perplexity"],
                "values": [30, 45, 60, 90, 0, 7],
                "chartType": "bar"
            },
            {
                "modelName": "Third Party Sharing",
                "labels": ["Sharing", "No Sharing"],
                "values": [4, 2],
                "chartType": "pie"
            }
        ]

        for summary in policy_summaries:
            PolicySummary.objects.create(**summary)

        for comparison in comparison_data:
            ComparisonData.objects.create(**comparison)

        for chart in chart_data:
            ChartData.objects.create(**chart)

        self.stdout.write(self.style.SUCCESS("Data Transparency data population complete!"))
