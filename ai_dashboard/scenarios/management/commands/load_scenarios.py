from django.core.management.base import BaseCommand
from scenarios.models import Scenario

class Command(BaseCommand):
    help = 'Load predefined scenarios into the database'

    def handle(self, *args, **kwargs):
        scenarios = [
            {
                "name": "No Data Tracking",
                "description": "Data is never stored or tracked.",
                "parameters": {
                    "privacy_level": 100, "security_level": 80, "transparency_level": 40,
                    "trust_level": 70, "ethics_level": 60, "bias_level": 50
                },
                "weightings": {
                    "privacy_level": 1.5, "security_level": 1.2, "transparency_level": 0.8,
                    "trust_level": 1.0, "ethics_level": 1.0, "bias_level": 1.0
                }
            },
            {
                "name": "Full Model Transparency",
                "description": "Everything is transparent and explainable.",
                "parameters": {
                    "privacy_level": 60, "security_level": 60, "transparency_level": 100,
                    "trust_level": 80, "ethics_level": 90, "bias_level": 70
                },
                "weightings": {
                    "privacy_level": 0.9, "security_level": 1.0, "transparency_level": 1.5,
                    "trust_level": 1.2, "ethics_level": 1.0, "bias_level": 1.0
                }
            },
            {
                "name": "Minimum Regulatory Compliance",
                "description": "Meets only basic regulatory requirements.",
                "parameters": {
                    "privacy_level": 50, "security_level": 50, "transparency_level": 30,
                    "trust_level": 40, "ethics_level": 50, "bias_level": 40
                },
                "weightings": {
                    "privacy_level": 1.0, "security_level": 1.0, "transparency_level": 1.0,
                    "trust_level": 1.0, "ethics_level": 1.0, "bias_level": 1.0
                }
            },
            {
                "name": "User Empowerment Focus",
                "description": "Maximum user control and trust.",
                "parameters": {
                    "privacy_level": 80, "security_level": 70, "transparency_level": 80,
                    "trust_level": 100, "ethics_level": 90, "bias_level": 70
                },
                "weightings": {
                    "privacy_level": 1.2, "security_level": 1.1, "transparency_level": 1.3,
                    "trust_level": 1.5, "ethics_level": 1.0, "bias_level": 1.0
                }
            },
            {
                "name": "Ethics First",
                "description": "Maximized ethical considerations.",
                "parameters": {
                    "privacy_level": 70, "security_level": 60, "transparency_level": 60,
                    "trust_level": 70, "ethics_level": 100, "bias_level": 80
                },
                "weightings": {
                    "privacy_level": 1.0, "security_level": 1.0, "transparency_level": 1.1,
                    "trust_level": 1.0, "ethics_level": 1.5, "bias_level": 1.2
                }
            },
            {
                "name": "Bias Mitigation Priority",
                "description": "Focused on reducing bias.",
                "parameters": {
                    "privacy_level": 60, "security_level": 60, "transparency_level": 70,
                    "trust_level": 80, "ethics_level": 80, "bias_level": 100
                },
                "weightings": {
                    "privacy_level": 1.0, "security_level": 1.0, "transparency_level": 1.1,
                    "trust_level": 1.0, "ethics_level": 1.0, "bias_level": 1.5
                }
            },
            {
                "name": "Security Centric",
                "description": "Strong security enforcement.",
                "parameters": {
                    "privacy_level": 70, "security_level": 100, "transparency_level": 60,
                    "trust_level": 60, "ethics_level": 60, "bias_level": 60
                },
                "weightings": {
                    "privacy_level": 1.0, "security_level": 1.5, "transparency_level": 1.0,
                    "trust_level": 1.0, "ethics_level": 1.0, "bias_level": 1.0
                }
            },
            {
                "name": "Transparency vs Privacy Tradeoff",
                "description": "High transparency at privacy cost.",
                "parameters": {
                    "privacy_level": 40, "security_level": 70, "transparency_level": 100,
                    "trust_level": 70, "ethics_level": 70, "bias_level": 60
                },
                "weightings": {
                    "privacy_level": 0.8, "security_level": 1.0, "transparency_level": 1.5,
                    "trust_level": 1.1, "ethics_level": 1.0, "bias_level": 1.0
                }
            },
            {
                "name": "AI Minimalist",
                "description": "Least interference, minimal controls.",
                "parameters": {
                    "privacy_level": 50, "security_level": 50, "transparency_level": 50,
                    "trust_level": 50, "ethics_level": 50, "bias_level": 50
                },
                "weightings": {
                    "privacy_level": 1.0, "security_level": 1.0, "transparency_level": 1.0,
                    "trust_level": 1.0, "ethics_level": 1.0, "bias_level": 1.0
                }
            },
            {
                "name": "Compliance Overload",
                "description": "Extreme compliance with all regulations.",
                "parameters": {
                    "privacy_level": 90, "security_level": 90, "transparency_level": 90,
                    "trust_level": 90, "ethics_level": 90, "bias_level": 90
                },
                "weightings": {
                    "privacy_level": 1.3, "security_level": 1.3, "transparency_level": 1.3,
                    "trust_level": 1.3, "ethics_level": 1.3, "bias_level": 1.3
                }
            }
        ]

        for scenario in scenarios:
            Scenario.objects.update_or_create(
                name=scenario["name"],
                defaults={
                    "description": scenario["description"],
                    "parameters": scenario["parameters"],
                    "weightings": scenario["weightings"],
                    "selected_axes": list(scenario["parameters"].keys())
                }
            )

        self.stdout.write(self.style.SUCCESS('Successfully loaded 10 scenarios!'))
