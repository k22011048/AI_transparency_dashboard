from django.core.management.base import BaseCommand
from model_details.models import AIModel
from django.utils.dateparse import parse_date

class Command(BaseCommand):
    help = 'Populate AIModel details with highly detailed, easy-to-understand data'

    def handle(self, *args, **kwargs):
        models_data = [
            {
                "name": "ChatGPT",
                "description": ("ChatGPT is a state-of-the-art conversational AI developed by OpenAI. "
                                 "It is designed to simulate human-like conversations, making it feel as though you are chatting with a real person. "
                                 "ChatGPT can understand a wide range of questions and topics, and it adapts its responses based on the context of the conversation. "
                                 "It is capable of following instructions, remembering previous parts of the conversation, and providing detailed, relevant answers. "
                                 "Its goal is to make digital interactions more natural, engaging, and helpful for users of all backgrounds."),
                "useCases": ("ChatGPT is used in many areas, including customer support, where it can answer questions and resolve issues 24/7 without human intervention. "
                             "It serves as a personal tutor, helping students learn new subjects or practice languages. "
                             "Writers and content creators use ChatGPT for brainstorming ideas, drafting articles, or generating creative stories and poems. "
                             "Businesses use it to automate scheduling, handle frequently asked questions, and even assist with technical troubleshooting. "
                             "Its flexibility makes it valuable for both personal productivity and enterprise solutions."),
                "transparencyLevel": "Medium",
                "developer": "OpenAI",
                "launchDate": parse_date("2022-11-30"),
                "modelSize": "175 Billion Parameters",
                "architectureDescription": ("ChatGPT is built on the transformer architecture, a breakthrough in artificial intelligence that allows the model to process and generate language with remarkable fluency. "
                                           "Transformers use a mechanism called 'attention' to focus on the most relevant parts of the input, enabling the model to understand context and relationships between words. "
                                           "This architecture allows ChatGPT to handle long conversations, remember previous exchanges, and generate responses that are coherent and contextually appropriate. "
                                           "The model is fine-tuned using reinforcement learning from human feedback, which helps it align its responses with user expectations and ethical guidelines."),
                "trainingData": ("ChatGPT was trained on a massive dataset that includes books, articles, websites, Wikipedia, and other publicly available text sources. "
                                "The data covers a wide range of topics, languages, and writing styles, giving the model a broad understanding of human knowledge and communication. "
                                "OpenAI applied filtering and moderation techniques to remove harmful or inappropriate content, and the model was further refined using feedback from human reviewers. "
                                "This combination of diverse data and careful curation helps ChatGPT provide accurate, safe, and helpful responses."),
                "architectureDiagram": "ChatGPT.jpg",
            },
            {
                "name": "Copilot",
                "description": ("Microsoft Copilot is an intelligent assistant designed to help users, especially software developers, by providing real-time suggestions and automating repetitive tasks. "
                                 "It acts as a co-pilot in your workflow, offering code completions, explanations, and documentation as you type. "
                                 "Copilot is integrated into popular development environments and productivity tools, making it easy to access its features without disrupting your work. "
                                 "It aims to boost productivity, reduce errors, and make complex tasks more approachable for everyone."),
                "useCases": ("Copilot is widely used for code generation, where it can write entire functions or classes based on a brief description. "
                             "It helps developers debug code by suggesting fixes and improvements, and it can automatically generate documentation for better code understanding. "
                             "In business settings, Copilot assists with data analysis, report generation, and automating routine office tasks. "
                             "It can summarize emails, draft responses, and help manage schedules, making it a valuable tool for both technical and non-technical users. "
                             "Its integration with Microsoft 365 means it can streamline workflows across Word, Excel, Outlook, and more."),
                "transparencyLevel": "Medium",
                "developer": "Microsoft",
                "launchDate": parse_date("2021-06-29"),
                "modelSize": "Varies by IDE integration",
                "architectureDescription": ("Copilot is powered by OpenAI Codex, a specialized version of the GPT-3 language model that has been fine-tuned on billions of lines of code. "
                                           "The architecture leverages the transformer model’s ability to understand both natural language and programming languages, allowing it to bridge the gap between human instructions and machine code. "
                                           "Copilot is deeply integrated with Microsoft’s cloud infrastructure, ensuring secure and scalable access to its features. "
                                           "It uses advanced context analysis to provide relevant suggestions based on the current file, project, and even organizational data, while respecting user privacy and security."),
                "trainingData": ("Copilot was trained on a vast collection of public code repositories, programming documentation, and technical articles. "
                                "For its business applications, it can securely access organizational data such as emails, documents, and spreadsheets, tailoring its suggestions to the user’s specific context. "
                                "Microsoft employs strict data privacy and security measures, ensuring that sensitive information is protected and not used to retrain the model. "
                                "The training process also includes feedback from developers and business users to continuously improve the model’s accuracy and usefulness."),
                "architectureDiagram": "microsoft_365_copilot_architecture-f_mobile.png",
            },
            {
                "name": "Gemini",
                "description": ("Gemini is Google’s next-generation AI model, designed to understand and process multiple types of information, including text, images, audio, and video. "
                                 "It is built to provide deep insights and support complex decision-making, making it a powerful tool for businesses, healthcare, and creative industries. "
                                 "Gemini can analyze large datasets, recognize patterns, and generate meaningful recommendations, helping users solve problems and discover new opportunities."),
                "useCases": ("Gemini is used for advanced data analysis, where it can process and interpret large volumes of structured and unstructured data. "
                             "It powers recommendation systems that suggest products, content, or actions based on user preferences and behavior. "
                             "In healthcare, Gemini assists with diagnostics, patient monitoring, and personalized treatment plans by analyzing medical records and imaging data. "
                             "It is also used in creative industries for content creation, multimedia analysis, and powering smart assistants that can understand and respond to complex queries."),
                "transparencyLevel": "Medium",
                "developer": "Google",
                "launchDate": parse_date("2023-01-15"),
                "modelSize": "Unknown",
                "architectureDescription": ("Gemini is based on an enhanced transformer architecture that is optimized for handling long and complex inputs across various data types. "
                                           "It uses advanced attention mechanisms to process and combine information from text, images, audio, and video, enabling it to understand context and relationships across different modalities. "
                                           "The model is scalable, with versions designed for both lightweight mobile applications and high-performance enterprise solutions. "
                                           "Gemini incorporates the latest research in multimodal learning, allowing it to transfer knowledge between different types of data and adapt to new tasks quickly."),
                "trainingData": ("Gemini was trained on a massive and diverse dataset that includes text documents, code, images, audio recordings, and videos. "
                                "Google applied advanced filtering and quality control to ensure the data is relevant, accurate, and free from harmful content. "
                                "The training process also involved multimodal and transfer learning techniques, enabling Gemini to understand the connections between different types of information. "
                                "Continuous updates and fine-tuning help the model stay current with new knowledge and user needs."),
                "architectureDiagram": "Gemini.jpeg",
            },
            {
                "name": "DeepSeek",
                "description": ("DeepSeek is an AI platform focused on enhancing search engine capabilities and information retrieval. "
                                 "It specializes in understanding the intent behind user queries, delivering more accurate and relevant search results. "
                                 "DeepSeek combines natural language processing, computer vision, and code generation to provide a comprehensive solution for modern search and recommendation systems."),
                "useCases": ("DeepSeek is used in semantic search engines, where it helps users find information based on meaning rather than just keywords. "
                             "It analyzes user behavior to improve search relevance and personalize recommendations. "
                             "DeepSeek is also applied in content recommendation systems, visual search (finding images based on descriptions), and tasks that require understanding both text and images. "
                             "Its code generation capabilities make it useful for technical search and developer tools as well."),
                "transparencyLevel": "Low",
                "developer": "DeepSeek",
                "launchDate": parse_date("2022-09-10"),
                "modelSize": "Large-scale Search Optimized Model",
                "architectureDescription": ("DeepSeek uses a Mixture-of-Experts (MoE) architecture, which divides tasks among several specialized sub-models, or 'experts.' "
                                           "A smart routing system determines which expert should handle each input, making the model more efficient and accurate. "
                                           "The platform is trained on distributed GPUs and TPUs, allowing it to process large-scale data and handle complex queries quickly. "
                                           "DeepSeek’s architecture is designed for scalability and adaptability, enabling it to serve millions of users with high reliability."),
                "trainingData": ("DeepSeek is trained on a wide variety of data sources, including search engine logs, web content, code repositories, and multimodal datasets that combine text and images. "
                                "The data undergoes rigorous preprocessing, such as tokenization, normalization, filtering, and encoding, to ensure high quality and consistency. "
                                "The model is also fine-tuned for specific domains, such as coding or reasoning, to enhance its expertise and performance in those areas. "
                                "Continuous learning from user interactions helps DeepSeek improve over time."),
                "architectureDiagram": "DeepSeek.png",
            },
            {
                "name": "Claude",
                "description": ("Claude is a conversational AI developed by Anthropic, designed to be helpful, honest, and harmless. "
                                 "It excels at understanding both the literal meaning and the subtle nuances of human communication, making it a reliable assistant for a wide range of tasks. "
                                 "Claude is built with a strong focus on safety and ethics, ensuring that its responses are appropriate and aligned with human values."),
                "useCases": ("Claude is used for conversational AI, where it can engage in natural, meaningful dialogues with users. "
                             "It is valuable in customer service, providing accurate and empathetic responses to inquiries. "
                             "Claude is also used for ethical reasoning, brainstorming, data analysis, and code generation. "
                             "Its ability to analyze sentiment, explain code, and process images makes it a versatile tool for businesses, developers, and researchers."),
                "transparencyLevel": "Medium",
                "developer": "Anthropic",
                "launchDate": parse_date("2023-03-01"),
                "modelSize": "52 Billion Parameters",
                "architectureDescription": ("Claude is built on a 'Constitutional AI' framework, which means it is trained with a set of ethical guidelines and principles. "
                                           "The model uses advanced natural language processing techniques to understand context, intent, and emotion in conversations. "
                                           "Claude is capable of handling both text and visual data, adapting its responses to different communication styles and user needs. "
                                           "Its architecture is designed to minimize bias and ensure that its outputs are safe, respectful, and helpful."),
                "trainingData": ("Claude is trained on a carefully curated mix of filtered web data, human-reviewed content, and diverse sources from various cultural and linguistic backgrounds. "
                                "The training process emphasizes ethical considerations, with human feedback used to refine the model’s behavior and reduce harmful outputs. "
                                "Anthropic continuously updates Claude with new data and feedback to improve its accuracy, safety, and usefulness."),
                "architectureDiagram": "Claude.png",
            },
            {
                "name": "Perplexity",
                "description": ("Perplexity AI is a cutting-edge question-answering system designed to provide accurate, transparent, and up-to-date information. "
                                 "It acts as a smart search engine alternative, delivering clear, fact-based answers by combining advanced AI with real-time data retrieval. "
                                 "Perplexity is built to help users find trustworthy information quickly and easily, with a strong emphasis on transparency and source citation."),
                "useCases": ("Perplexity is used for search and information retrieval, offering fact-based answers to complex questions. "
                             "It is valuable for researchers, students, and professionals who need reliable, current information. "
                             "Perplexity can summarize articles, explain concepts, and provide references for its answers, making it a powerful tool for education and decision-making. "
                             "Its ability to integrate real-time data ensures that users always have access to the latest information."),
                "transparencyLevel": "High",
                "developer": "Perplexity AI",
                "launchDate": parse_date("2022-05-20"),
                "modelSize": "Unknown",
                "architectureDescription": ("Perplexity uses a retrieval-augmented generation (RAG) model, which combines a large language model with real-time search capabilities. "
                                           "When a user asks a question, the system retrieves relevant information from the web or trusted knowledge bases, then generates a clear and concise answer. "
                                           "This hybrid approach ensures that responses are both accurate and up-to-date, with sources provided for transparency. "
                                           "Perplexity’s architecture is designed for speed, reliability, and ease of use, making it accessible to users of all technical backgrounds."),
                "trainingData": ("Perplexity is trained on a wide range of knowledge bases, real-time search engine data, and factual web content. "
                                "The model is fine-tuned using advanced infrastructure, such as Amazon SageMaker HyperPod, and leverages open-source models like Mistral 7B and Mixtral 8x7B. "
                                "Continuous updates and user feedback help Perplexity prioritize the most current and relevant information, ensuring that its answers remain accurate and trustworthy."),
                "architectureDiagram": "Perplexity.png",
            },
        ]

        for model_data in models_data:
            AIModel.objects.update_or_create(
                name=model_data["name"],
                defaults=model_data
            )

        self.stdout.write(self.style.SUCCESS("AIModel details populated with correct diagram filenames."))
