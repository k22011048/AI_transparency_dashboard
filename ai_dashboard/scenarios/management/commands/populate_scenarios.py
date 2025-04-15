from django.core.management.base import BaseCommand
from scenarios.models import Scenario

DEFAULT_PARAMETERS = {
    "transparency_level": 50,
    "privacy_level": 50,
    "security_level": 50,
    "bias_mitigation_level": 50,
    "fairness_level": 50,
    "user_control_level": 50,
    "auditability_level": 50
}

SCENARIOS = [
    {
        "name": "No Data Tracking",
        "description": "A scenario with maximum privacy and no user data tracking.",
        "weightings": {
            "transparency_level": 1.1,
            "privacy_level": 1.8,
            "security_level": 1.3,
            "bias_mitigation_level": 1.0,
            "fairness_level": 1.0,
            "user_control_level": 1.2,
            "auditability_level": 1.0
        }
    },
    {
        "name": "Full Model Transparency",
        "description": "A scenario with open model code and full transparency.",
        "weightings": {
            "transparency_level": 1.8,
            "privacy_level": 1.0,
            "security_level": 1.1,
            "bias_mitigation_level": 1.2,
            "fairness_level": 1.1,
            "user_control_level": 1.3,
            "auditability_level": 1.7
        }
    },
    {
        "name": "Minimum Compliance",
        "description": "Basic transparency and privacy required by regulation.",
        "weightings": {
            "transparency_level": 1.0,
            "privacy_level": 1.0,
            "security_level": 1.0,
            "bias_mitigation_level": 1.0,
            "fairness_level": 1.0,
            "user_control_level": 1.0,
            "auditability_level": 1.0
        }
    },
    {
        "name": "Ethical AI Focus",
        "description": "Designed with fairness and bias mitigation in mind.",
        "weightings": {
            "transparency_level": 1.2,
            "privacy_level": 1.1,
            "security_level": 1.0,
            "bias_mitigation_level": 1.8,
            "fairness_level": 1.7,
            "user_control_level": 1.0,
            "auditability_level": 1.2
        }
    },
    {
        "name": "Max Security",
        "description": "Scenario optimized for security critical environments.",
        "weightings": {
            "transparency_level": 1.0,
            "privacy_level": 1.3,
            "security_level": 1.9,
            "bias_mitigation_level": 1.0,
            "fairness_level": 1.0,
            "user_control_level": 1.0,
            "auditability_level": 1.3
        }
    },
    {
        "name": "User Empowerment",
        "description": "Focused on maximum user control and data ownership.",
        "weightings": {
            "transparency_level": 1.2,
            "privacy_level": 1.4,
            "security_level": 1.1,
            "bias_mitigation_level": 1.0,
            "fairness_level": 1.0,
            "user_control_level": 1.9,
            "auditability_level": 1.2
        }
    },
    {
        "name": "Fast AI Deployment",
        "description": "Optimized for quick delivery with minimal regulation.",
        "weightings": {
            "transparency_level": 0.8,
            "privacy_level": 0.7,
            "security_level": 0.9,
            "bias_mitigation_level": 0.9,
            "fairness_level": 0.9,
            "user_control_level": 1.0,
            "auditability_level": 0.8
        }
    },
    {
        "name": "High Auditability",
        "description": "Designed to be highly auditable and compliant.",
        "weightings": {
            "transparency_level": 1.5,
            "privacy_level": 1.2,
            "security_level": 1.2,
            "bias_mitigation_level": 1.0,
            "fairness_level": 1.0,
            "user_control_level": 1.0,
            "auditability_level": 2.0
        }
    },
    {
        "name": "Bias Reduction Priority",
        "description": "Optimized to minimize bias and improve fairness.",
        "weightings": {
            "transparency_level": 1.2,
            "privacy_level": 1.0,
            "security_level": 1.0,
            "bias_mitigation_level": 2.0,
            "fairness_level": 2.0,
            "user_control_level": 1.0,
            "auditability_level": 1.1
        }
    },
    {
        "name": "Balanced AI",
        "description": "A balanced scenario across all parameters.",
        "weightings": {
            "transparency_level": 1.0,
            "privacy_level": 1.0,
            "security_level": 1.0,
            "bias_mitigation_level": 1.0,
            "fairness_level": 1.0,
            "user_control_level": 1.0,
            "auditability_level": 1.0
        }
    }
]

class Command(BaseCommand):
    help = 'Populates the database with predefined scenarios'

    def handle(self, *args, **kwargs):
        for data in SCENARIOS:
            Scenario.objects.update_or_create(
                name=data["name"],
                defaults={
                    "description": data["description"],
                    "parameters": DEFAULT_PARAMETERS,
                    "selected_axes": ["transparency_level", "privacy_level", "security_level"],
                    "weightings": data["weightings"]
                }
            )
        self.stdout.write(self.style.SUCCESS("Scenarios populated successfully."))
