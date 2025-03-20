import os
import django

# Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ai_dashboard.settings")  # Update "ai_dashboard" with your project name
django.setup()

from ai_recommendation.models import Feature  # Import the Feature model

def populate_features():
    # Define the features data
    features = [
        {
            "name": "Data Privacy",
            "description": "Protects user data from misuse and ensures compliance with privacy regulations.",
            "recommended_model": "OpenAI GPT-4",
            "recommendation_reason": "Implements strong data anonymization and privacy-preserving techniques."
        },
        {
            "name": "Transparency",
            "description": "Provides clear and understandable operations for users.",
            "recommended_model": "Google Bard",
            "recommendation_reason": "Designed to make AI decision-making processes interpretable and transparent."
        },
        {
            "name": "Ethics",
            "description": "Ensures ethical AI behavior and decision-making.",
            "recommended_model": "IBM Watson",
            "recommendation_reason": "Built with ethical guidelines and bias mitigation strategies."
        },
        {
            "name": "Trust",
            "description": "Builds user confidence in the AI system.",
            "recommended_model": "Microsoft Azure OpenAI Service",
            "recommendation_reason": "Demonstrates reliable performance and trustworthiness in enterprise applications."
        },
        {
            "name": "Security",
            "description": "Protects data and ensures system safety.",
            "recommended_model": "Amazon Bedrock",
            "recommendation_reason": "Features robust defenses against cyber threats and data breaches."
        },
        {
            "name": "Fairness",
            "description": "Reduces bias and ensures equitable treatment of all users.",
            "recommended_model": "Fairlearn (Microsoft)",
            "recommendation_reason": "Specialized in fairness metrics and bias mitigation."
        },
        {
            "name": "Interpretability",
            "description": "Allows users to understand how AI models make decisions.",
            "recommended_model": "SHAP (SHapley Additive exPlanations)",
            "recommendation_reason": "Provides detailed explanations for AI predictions."
        },
        {
            "name": "Accountability",
            "description": "Ensures that AI systems are accountable for their actions.",
            "recommended_model": "Hugging Face Transformers",
            "recommendation_reason": "Promotes open-source transparency and community-driven accountability."
        },
        {
            "name": "Robustness",
            "description": "Ensures the AI system performs reliably under various conditions.",
            "recommended_model": "DeepMind AlphaCode",
            "recommendation_reason": "Known for its robustness in solving complex computational problems."
        },
        {
            "name": "Scalability",
            "description": "Supports scaling to handle large datasets and user bases.",
            "recommended_model": "Amazon SageMaker",
            "recommendation_reason": "Optimized for scalable machine learning workflows."
        },
        {
            "name": "Creativity",
            "description": "Generates innovative and creative outputs.",
            "recommended_model": "DALL·E 2",
            "recommendation_reason": "Excels in generating creative visual content."
        },
        {
            "name": "Adaptability",
            "description": "Adapts to new tasks and environments efficiently.",
            "recommended_model": "Google DeepMind Gemini",
            "recommendation_reason": "Highly adaptable to diverse problem-solving scenarios."
        },
        {
            "name": "Speed",
            "description": "Processes data and generates outputs quickly.",
            "recommended_model": "Anthropic Claude",
            "recommendation_reason": "Optimized for fast and efficient natural language processing."
        },
        {
            "name": "User Friendliness",
            "description": "Provides an intuitive and easy-to-use interface.",
            "recommended_model": "ChatGPT (OpenAI)",
            "recommendation_reason": "Widely recognized for its user-friendly conversational interface."
        },
        {
            "name": "Innovation",
            "description": "Pioneers new approaches and technologies in AI.",
            "recommended_model": "Google Bard",
            "recommendation_reason": "Known for its cutting-edge advancements in generative AI."
        }
    ]

    # Populate the database
    for feature in features:
        obj, created = Feature.objects.get_or_create(**feature)
        if created:
            print(f"Added feature: {obj.name}")
        else:
            print(f"Feature already exists: {obj.name}")

if __name__ == "__main__":
    populate_features()
    print("Data population complete!")
