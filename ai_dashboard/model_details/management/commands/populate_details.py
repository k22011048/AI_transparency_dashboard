from django.core.management.base import BaseCommand
from model_details.models import AIModel
from django.utils.dateparse import parse_date

class Command(BaseCommand):
    help = 'Populate AIModel details with predefined data'

    def handle(self, *args, **kwargs):
        models_data = [
            {
                "name": "ChatGPT",
                "description": "ChatGPT is a conversational AI trained to understand and respond to human language naturally...",
                "useCases": "Customer support, tutoring, scheduling, creative writing assistance, content generation.",
                "transparencyLevel": "Medium",
                "developer": "OpenAI",
                "launchDate": parse_date("2022-11-30"),
                "modelSize": "175 Billion Parameters",
                "architectureDescription": "Transformer-based language model leveraging advanced NLP techniques.",
                "trainingData": "Web data, books, Wikipedia, publicly available content.",
            },
            {
                "name": "Copilot",
                "description": "Microsoft Copilot assists developers by providing code suggestions, debugging hints...",
                "useCases": "Code generation, developer documentation, real-time collaboration in IDEs.",
                "transparencyLevel": "Medium",
                "developer": "Microsoft",
                "launchDate": parse_date("2021-06-29"),
                "modelSize": "Varies by IDE integration",
                "architectureDescription": "Built on OpenAI Codex, a GPT-3 derivative trained on code datasets.",
                "trainingData": "Public code repositories, programming documentation.",
            },
            {
                "name": "Gemini",
                "description": "Gemini by Google is designed for business insights, healthcare applications...",
                "useCases": "Data analysis, recommendation systems, automated workflows.",
                "transparencyLevel": "Medium",
                "developer": "Google",
                "launchDate": parse_date("2023-01-15"),
                "modelSize": "Unknown",
                "architectureDescription": "Multimodal transformer optimized for structured data processing.",
                "trainingData": "Business datasets, analytics platforms, web data.",
            },
            {
                "name": "DeepSeek",
                "description": "DeepSeek focuses on improving search engine capabilities with advanced context understanding...",
                "useCases": "Semantic search, user behavior analysis, content recommendation.",
                "transparencyLevel": "Low",
                "developer": "DeepSeek",
                "launchDate": parse_date("2022-09-10"),
                "modelSize": "Large-scale Search Optimized Model",
                "architectureDescription": "Optimized search transformer leveraging user query patterns.",
                "trainingData": "Search engine logs, web content, query datasets.",
            },
            {
                "name": "Claude",
                "description": "Claude is Anthropic’s AI model developed to be harmless, helpful, and honest...",
                "useCases": "Conversational AI, ethical reasoning, customer service.",
                "transparencyLevel": "Medium",
                "developer": "Anthropic",
                "launchDate": parse_date("2023-03-01"),
                "modelSize": "52 Billion Parameters",
                "architectureDescription": "Constitutional AI framework built for safe dialogue generation.",
                "trainingData": "Filtered web data, human-reviewed content.",
            },
            {
                "name": "Perplexity",
                "description": "Perplexity AI is a question-answering system focused on factual accuracy and transparency...",
                "useCases": "Search engine alternative, fact-based query response, user education.",
                "transparencyLevel": "High",
                "developer": "Perplexity AI",
                "launchDate": parse_date("2022-05-20"),
                "modelSize": "Unknown",
                "architectureDescription": "Retrieval-augmented generation model integrating real-time search data.",
                "trainingData": "Knowledge bases, real-time search engine data, factual web content.",
            },
        ]

        for model_data in models_data:
            AIModel.objects.update_or_create(
                name=model_data["name"],
                defaults=model_data
            )

        self.stdout.write(self.style.SUCCESS("AIModel details populated successfully."))
