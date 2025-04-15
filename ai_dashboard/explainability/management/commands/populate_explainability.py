from django.core.management.base import BaseCommand
from explainability.models import ModelExplainability, BiasDetection, EducationalResource

class Command(BaseCommand):
    help = 'Populates Explainability, BiasDetection, and EducationalResource models'

    def handle(self, *args, **kwargs):
        # Model Explainability Data with full flowchart explanation
        explainability_content = [
            {
                "title": "Model Explainability Visuals",
                "description": "AI Decision Making Flowchart"
            },
            {
                "title": "AI Decision-Making Process",
                "description": """
User Input:
The AI receives input from the user, such as text, voice, or images. This marks the starting point of the interaction.

Process Input:
The input is pre-processed by tokenizing and encoding it into a numerical format that the AI model can understand.
  - Tokenize & Encode:
    The input is broken into smaller units (tokens), such as words or subwords, and converted into numerical vectors for AI processing.

Analyze Context:
The AI identifies patterns, intent, and context from the input, ensuring relevance and coherence in its response.
  - Analyze Context:
    The system examines relationships and patterns in the input, leveraging past interactions or data if necessary.

Generate Response:
Using its trained model, the AI generates an initial response based on the user's input and the identified context.
  - Predict Next Step:
    The AI predicts the next logical output by leveraging the patterns it learned during training.
  - Fine-Tune Output:
    The generated content is adjusted to ensure relevance, appropriateness, and alignment with the user's intent.

Refine & Adjust:
The AI refines the output by applying quality checks, safety rules, and moderation to ensure it meets ethical standards.
  - Apply Rules & Filters:
    The AI applies predefined rules to filter out harmful, biased, or inappropriate content.
  - Check for Issues:
    The output is reviewed to ensure there are no errors or safety concerns, and it aligns with quality standards.

Send Output:
The finalized response is sent to the user in the appropriate format, completing the interaction process.
"""
            },
        ]

        # Bias Detection Data
        bias_detection_content = [
            {
                "title": "Bias Detection Insights",
                "description": """
This section offers detailed explanations of potential biases in AI models and mitigation efforts by developers.

Bias in AI can originate from multiple sources, including biased training data, unintended algorithmic behavior, and insufficient model testing.

Types of Bias:
- Data Bias: Training data does not adequately represent all user groups.
- Labeling Bias: Subjective or inaccurate labels by humans.
- Algorithmic Bias: Models reinforce existing patterns from training data.
- Deployment Bias: Models behave differently in real-world settings.
- Automation Bias: Over-reliance on AI outputs by users.

Bias Detection Methods:
- Data Auditing
- Fairness Metrics
- Adversarial Testing
- Human Oversight

Mitigation Strategies:
- Diverse Training Data
- Fairness-aware Algorithms
- Explainability Tools
- Regulatory Compliance
- Continuous Monitoring
"""
            }
        ]

        # Educational Resources Data
        educational_resources_content = [
            {
                "title": "Glossary of AI Transparency Terms",
                "description": "Click to view a comprehensive glossary defining key concepts in AI transparency.",
                "details": """
Algorithm: A set of instructions or rules designed to perform a specific task or solve a problem.
Artificial Intelligence (AI): The simulation of human intelligence processes by machines.
Bias Mitigation: Methods and techniques aimed at reducing or removing bias in AI systems.
Explainability: The ability of AI models to provide understandable outputs or reasoning.
Fairness: Ensuring AI systems do not create or reinforce unjust biases or discrimination.
Model Interpretability: Understanding how an AI model makes its decisions.
Accountability: Tracing and addressing decisions made by AI systems.
Data Transparency: Openness about the sources, quality, and preprocessing of the data.
Black Box Model: Non-transparent AI systems where decisions are hard to interpret.
White Box Model: Fully interpretable and transparent AI systems.
Ethical AI: Development guided by principles such as fairness and privacy.
Regulatory Compliance: Adherence to laws like GDPR.
Human-in-the-loop (HITL): Incorporating human oversight in decision-making.
Explainable AI (XAI): AI that is understandable to humans.
Model Robustness: Ensuring consistent performance despite input changes.
Feature Importance: Determining which inputs significantly affect outputs.
Adversarial Testing: Stress-testing models for vulnerabilities.
Causal Analysis: Assessing cause-and-effect relationships in AI.
"""
            },
            {
                "title": "Case Study: IBM Watson Health",
                "description": "IBM applied AI to streamline medical data analysis, improving diagnosis and treatment strategies.",
                "details": "IBM Watson Health used AI to analyze datasets like patient records and research articles. By providing evidence-based treatment suggestions, it supported clinicians in delivering personalized care."
            },
            {
                "title": "Case Study: Google DeepMind’s AlphaFold",
                "description": "DeepMind’s AlphaFold revolutionized biology by predicting protein structures with high accuracy.",
                "details": "AlphaFold tackled protein folding using deep learning, shortening discovery time and advancing drug design and disease understanding."
            },
            {
                "title": "Case Study: Singapore’s GovTech Chatbots",
                "description": "Singapore’s government introduced AI-powered chatbots to improve public service delivery.",
                "details": 'The chatbots like "Ask Jamie" understood natural language and responded to FAQs related to public services. By addressing privacy concerns and ensuring secure communication, they built trust while reducing costs.'
            },
            {
                "title": "Case Study: Predictive Policing in the US",
                "description": "Predictive policing systems faced challenges in addressing systemic biases.",
                "details": "These tools analyzed historical crime data but sometimes reinforced over-policing in marginalized communities. Efforts to integrate fairness algorithms have helped, but issues remain."
            },
            {
                "title": "Case Study: BBVA’s Digital Transformation",
                "description": "BBVA used AI for personalized services and improved customer onboarding.",
                "details": "BBVA's explainable AI helped justify recommendations and built user trust, earning it praise for ethical AI in the financial sector."
            },
        ]

        for item in explainability_content:
            obj, created = ModelExplainability.objects.get_or_create(**item)
            if created:
                self.stdout.write(self.style.SUCCESS(f"Added Explainability: {obj.title}"))

        for item in bias_detection_content:
            obj, created = BiasDetection.objects.get_or_create(**item)
            if created:
                self.stdout.write(self.style.SUCCESS(f"Added BiasDetection: {obj.title}"))

        for item in educational_resources_content:
            obj, created = EducationalResource.objects.get_or_create(**item)
            if created:
                self.stdout.write(self.style.SUCCESS(f"Added EducationalResource: {obj.title}"))

        self.stdout.write(self.style.SUCCESS("Explainability data fully populated!"))
