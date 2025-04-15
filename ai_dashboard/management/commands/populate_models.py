from django.core.management.base import BaseCommand
from home.models import AIModel

class Command(BaseCommand):
    help = "Populate the AIModel table with predefined AI systems"

    def handle(self, *args, **kwargs):
        models_data = [
            {
                "name": "ChatGPT",
                "company": "OpenAI",
                "use_cases": "ChatGPT is utilized for customer support by automating responses, generating content for articles and social media, tutoring students in various subjects, assisting with personal tasks such as scheduling, and aiding creative writing efforts through brainstorming and editing.",
                "transparency_level": "Medium"
            },
            {
                "name": "Microsoft Copilot",
                "company": "Microsoft",
                "use_cases": "CoPilot assists software developers by suggesting code snippets, debugging, generating documentation, providing learning support for new developers, and enhancing project management through real-time collaboration features directly within integrated development environments.",
                "transparency_level": "Low"
            },
            {
                "name": "Gemini",
                "company": "Google DeepMind",
                "use_cases": "Gemini is effective in data analysis, extracting insights from large datasets for businesses, enhancing natural language processing applications, automating repetitive workflows, personalizing recommendations in e-commerce, and supporting healthcare applications through data-driven diagnostics.",
                "transparency_level": "Medium"
            },
            {
                "name": "DeepSeek",
                "company": "DeepSeek AI",
                "use_cases": "Deep Seek optimizes search engines by improving search efficiency and accuracy, enabling semantic search for better context understanding, retrieving relevant information from vast datasets, facilitating content discovery based on user interests, and conducting market research to analyze trends and consumer behavior.",
                "transparency_level": "Low"
            },
            {
                "name": "Claude",
                "company": "Anthropic",
                "use_cases": "Claude is designed with a focus on safety and ethical AI usage. It helps businesses create conversational agents that respect privacy and fairness, assists with summarization of sensitive documents, and facilitates transparent decision-making through explainable AI features.",
                "transparency_level": "High"
            },
            {
                "name": "Perplexity",
                "company": "Perplexity AI",
                "use_cases": "Perplexity AI functions as an advanced answer engine that provides real-time web search results, generates comprehensive responses by citing credible sources, enhances Q&A systems for educational platforms, and offers personalized information retrieval for research purposes.",
                "transparency_level": "High"
            },
        ]

        for model_data in models_data:
            AIModel.objects.update_or_create(
                name=model_data["name"],
                defaults=model_data
            )

        self.stdout.write(self.style.SUCCESS("✅ Successfully populated AIModel table with 6 entries"))
