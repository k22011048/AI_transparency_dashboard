import React, { useEffect, useState } from 'react';
import './ExplainabilityPage.css';

const ExplainabilityPage = () => {
    const [modelData, setModelData] = useState([]);
    const [biasData, setBiasData] = useState([]);
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const biasInsightsDetails = {
        description:
            'This section offers detailed explanations of potential biases in AI models and mitigation efforts by developers. Explore interactive methods and visualisations below.',
        details: (
            <>
                <p>
                    Bias in AI can originate from multiple sources, including biased training data, unintended algorithmic
                    behavior, and insufficient model testing. Detecting and mitigating these biases is critical to ensuring fair
                    and equitable AI applications.
                </p>
                <h4>Types of Bias in AI Models:</h4>
                <ul>
                    <li><strong>Data Bias:</strong> Occurs when the training data does not adequately represent all user groups, leading to skewed outcomes.</li>
                    <li><strong>Labeling Bias:</strong> Happens when human-labeled data includes subjective or incorrect classifications, reflecting personal biases.</li>
                    <li><strong>Algorithmic Bias:</strong> Arises when AI models reinforce existing biases due to optimisation based on skewed datasets.</li>
                    <li><strong>Deployment Bias:</strong> When AI models behave differently in real-world conditions compared to training environments.</li>
                    <li><strong>Automation Bias:</strong> Users relying too much on AI decisions without questioning their validity.</li>
                </ul>
                <h4>Bias Detection Methods:</h4>
                <ul>
                    <li><strong>Data Auditing:</strong> Analysing datasets for imbalances or underrepresentation of certain demographics.</li>
                    <li><strong>Fairness Metrics:</strong> Using statistical fairness measures like disparate impact and demographic parity.</li>
                    <li><strong>Adversarial Testing:</strong> Stress-testing AI models to detect and mitigate bias.</li>
                    <li><strong>Human Oversight:</strong> Incorporating domain experts to review AI outputs and ensure fairness.</li>
                </ul>
                <h4>Mitigation Strategies:</h4>
                <ul>
                    <li><strong>Diverse Training Data:</strong> Ensuring datasets include representation from all user groups.</li>
                    <li><strong>Fairness-aware Algorithms:</strong> Adjusting models to minimise discrimination.</li>
                    <li><strong>Explainability Tools:</strong> Implementing methods that make AI decisions more transparent.</li>
                    <li><strong>Regulatory Compliance:</strong> Adhering to ethical AI guidelines and regulations.</li>
                    <li><strong>Continuous Monitoring:</strong> Regularly auditing AI models to identify and correct bias over time.</li>
                </ul>
                <p>
                    By applying these techniques, organisations can create fairer AI systems that are more ethical and accountable.
                </p>
            </>
        )
    };

    const educationalResources = [
        {
            id: 1,
            title: 'Glossary of AI Transparency Terms',
            description: 'Click to view a comprehensive glossary defining key concepts in AI transparency, such as explainability, fairness, and accountability.',
            details: [
                'Algorithm: A set of instructions or rules designed to perform a specific task or solve a problem.',
                'Artificial Intelligence (AI): The simulation of human intelligence processes by machines, especially computer systems, including learning, reasoning, and self-correction.',
                'Bias Mitigation: Methods and techniques aimed at reducing or removing bias in AI systems, ensuring equitable outcomes.',
                'Explainability: The ability of AI models to provide understandable and interpretable outputs or reasoning for their decisions.',
                'Fairness: The principle ensuring that AI systems do not create or reinforce unjust biases or discrimination.',
                'Model Interpretability: The degree to which a human can understand the cause of a decision made by an AI model.',
                'Accountability: The ability to trace, understand, and address decisions or actions made by AI systems.',
                'Data Transparency: Ensuring openness about the sources, quality, and preprocessing of the data used in AI models.',
                'Black Box Model: A type of model where the internal workings are not transparent or interpretable, making it difficult to understand how decisions are made.',
                'White Box Model: Opposite of a black box model; refers to AI systems that are fully interpretable and transparent.',
                'Ethical AI: The development and use of AI systems guided by principles such as fairness, transparency, accountability, and respect for privacy.',
                'Regulatory Compliance: Adhering to laws and regulations related to the use of AI, such as GDPR.',
                'Human-in-the-loop (HITL): Incorporating human oversight into the AI decision-making process to ensure better outcomes.',
                'Explainable Artificial Intelligence (XAI): Subfield of AI focused on making the decisions of models understandable to humans.',
                'Model Robustness: The ability of an AI model to maintain performance despite changes in input or conditions.',
                'Feature Importance: A technique used in machine learning to determine the influence of individual input features on the output predictions.',
                'Adversarial Testing: Methods to probe and stress-test AI models for vulnerabilities, especially regarding fairness and robustness.',
                'Causal Analysis: A method to assess cause-and-effect relationships in AI models.'
            ]
        },
        {
            id: 2,
            title: 'Case Study: IBM Watson Health',
            description: 'IBM applied AI to streamline medical data analysis, improving diagnosis and treatment strategies.',
            details: 'IBM Watson Health applied natural language processing and machine learning to interpret large datasets such as patient records, research articles, and imaging. By providing evidence-based treatment suggestions and highlighting related clinical trials, Watson supported clinicians in delivering accurate, personalised care. The transparency of Watson’s reasoning—outlining the data sources and methodologies—fostered trust among healthcare providers, leading to better adoption and improved patient outcomes.'
        },
        {
            id: 3,
            title: 'Case Study: Google DeepMind’s AlphaFold',
            description: 'DeepMind’s AlphaFold revolutionised biology by predicting protein structures with high accuracy.',
            details: 'AlphaFold tackled the longstanding challenge of protein folding, a critical issue in biology, by training a deep learning model to predict 3D structures based on amino acid sequences. This breakthrough shortened the time for structure discovery from years to days, impacting drug design, disease understanding, and synthetic biology. DeepMind’s decision to publish their methods and release findings openly enabled worldwide researchers to validate and build upon their work, fostering collaboration and driving global progress in scientific discovery.'
        },
        {
            id: 4,
            title: 'Case Study: Singapore’s GovTech Chatbots',
            description: 'Singapore’s government introduced AI-powered chatbots to improve public service delivery.',
            details: 'The introduction of chatbots like "Ask Jamie" enabled Singapore to manage millions of citizen inquiries efficiently. The chatbots understood natural language and responded to FAQs related to public services, functioning 24/7 without human intervention. By openly addressing data privacy concerns and ensuring secure communication channels, the government fostered public trust in AI technologies while significantly reducing operational costs and response times.'
        },
        {
            id: 5,
            title: 'Case Study: Predictive Policing in the US',
            description: 'Predictive policing systems faced challenges in addressing systemic biases.',
            details: 'Predictive policing tools were designed to analyse historical crime data and predict areas of potential criminal activity. However, biases in the training data—such as over-policing in minority neighborhoods—led to disproportionate targeting of specific demographic groups. While efforts to include fairness algorithms and increase transparency improved the situation in some cases, many systems continued to face criticism, highlighting the importance of ethical data use and stakeholder involvement in AI deployment.'
        },
        {
            id: 6,
            title: 'Case Study: BBVA’s Digital Transformation',
            description: 'BBVA used AI for personalised services and improved customer onboarding.',
            details: 'BBVA leveraged AI for customer segmentation, providing tailored financial product recommendations. Through transparency in their AI processes—such as explaining why a customer was offered a particular loan or service—the bank built trust and compliance with regulatory standards. The improved user experience and customer satisfaction levels resulted in BBVA being recognised as a leader in ethical AI implementation in the financial industry.'
        }

    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const modelRes = await fetch('/api/model-explainability/');
                const modelText = await modelRes.text();
                try {
                    const modelJson = JSON.parse(modelText);
                    setModelData(modelJson);
                } catch (e) {
                    console.error('Error parsing model explainability JSON:', e);
                    console.log('Response text:', modelText);
                }

                const biasRes = await fetch('/api/bias-detection/');
                const biasText = await biasRes.text();
                try {
                    const biasJson = JSON.parse(biasText);
                    setBiasData(biasJson);
                } catch (e) {
                    console.error('Error parsing bias detection JSON:', e);
                    console.log('Response text:', biasText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);

    return (
        <div className="explainability-page">
            <h1 className="heading">AI Model Explainability Page</h1>
            <div className="section">
                <h2 className="heading">Model Explainability Visuals</h2>
                <div id="modelChart" className="chart"></div>
            </div>
            <div className="section">
                <h2 className="heading">Bias Detection Insights</h2>
                <p>{biasInsightsDetails.description}</p>
                <div className="details">{biasInsightsDetails.details}</div>
            </div>
            <div className="section">
                <h2 className="heading">Educational Resources</h2>
                <ul className="resource-list">
                    {educationalResources.map((item) => (
                        <li key={item.id} className="resource-item">
                            <strong onClick={() => toggleExpand(item.id)} style={{ cursor: 'pointer' }}>
                                {item.title}
                            </strong>
                            <p>{item.description}</p>
                            {expandedItems[item.id] && (
                                <div className="details">
                                    {Array.isArray(item.details) ? (
                                        <ul>
                                            {item.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.details}</p>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExplainabilityPage;
