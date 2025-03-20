import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import "./ExplainabilityPage.css";

const ExplainabilityPage = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [description, setDescription] = useState("");

  // Mermaid graph definition
  const mermaidGraph = `
  graph TD
  A[User Input: Prompt] --> B[Preprocessing: Tokenization]
  B --> C[Embeddings: Converting Tokens to Vectors]
  C --> D[Transformer Layers: Processing Through Neural Networks]
  D --> E[Output: Generating Responses]

  click A showDescription "User Input: The user provides a prompt, such as a question or instruction."
  click B showDescription "Preprocessing: The input is tokenized into smaller units (tokens)."
  click C showDescription "Embeddings: Tokens are transformed into numerical vectors representing their meaning."
  click D showDescription "Transformer Layers: Neural networks process vectors, applying context and learned patterns."
  click E showDescription "Output: The model generates meaningful text or other content as the result."
`;

useEffect(() => {
    // Check if the code is running in the browser
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const renderMermaid = async () => {
        try {
          const element = document.querySelector(".mermaid");
          if (element) {
            await mermaid.render("mermaidGraph", mermaidGraph, (code) => {
              element.innerHTML = code;
            });
          } else {
            console.error("Mermaid container not found in the DOM.");
          }
          window.showDescription = (text) => setDescription(text);
        } catch (err) {
          console.error("Mermaid rendering error:", err);
        }
      };
  
      mermaid.initialize({ startOnLoad: true });
      renderMermaid(); // Call the renderMermaid function
    } else {
      console.error("Document or window is undefined. Mermaid rendering skipped.");
    }
  }, [mermaidGraph]);

  // Toggle educational resource details
  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Educational resources data
  const educationalResources = [
    {
      id: 1,
      title: "Glossary of AI Transparency Terms",
      description:
        "Click to view a comprehensive glossary defining key concepts in AI transparency.",
      details: [
        "Algorithm: A set of instructions or rules designed to perform a specific task or solve a problem.",
        "Artificial Intelligence (AI): The simulation of human intelligence processes by machines, including learning, reasoning, and self-correction.",
        "Bias Mitigation: Methods and techniques aimed at reducing or removing bias in AI systems.",
        "Explainability: The ability of AI models to provide understandable outputs or reasoning.",
        "Fairness: Ensuring AI systems do not create or reinforce unjust biases or discrimination.",
        "Model Interpretability: Understanding how an AI model makes its decisions.",
        "Accountability: Tracing and addressing decisions made by AI systems.",
        "Data Transparency: Openness about the sources, quality, and preprocessing of the data.",
        "Black Box Model: Non-transparent AI systems, where decisions are hard to interpret.",
        "White Box Model: Fully interpretable and transparent AI systems.",
        "Ethical AI: Development guided by principles such as fairness and privacy.",
        "Regulatory Compliance: Adherence to laws like GDPR.",
        "Human-in-the-loop (HITL): Incorporating human oversight in decision-making.",
        "Explainable AI (XAI): AI that is understandable to humans.",
        "Model Robustness: Ensuring consistent performance despite input changes.",
        "Feature Importance: Determining which inputs significantly affect outputs.",
        "Adversarial Testing: Stress-testing models for vulnerabilities.",
        "Causal Analysis: Assessing cause-and-effect relationships in AI.",
      ],
    },
    {
      id: 2,
      title: "Case Study: IBM Watson Health",
      description:
        "IBM applied AI to streamline medical data analysis, improving diagnosis and treatment strategies.",
      details:
        "IBM Watson Health used AI to analyze datasets like patient records and research articles. By providing evidence-based treatment suggestions, it supported clinicians in delivering personalized care.",
    },
    {
      id: 3,
      title: "Case Study: Google DeepMind’s AlphaFold",
      description:
        "DeepMind’s AlphaFold revolutionized biology by predicting protein structures with high accuracy.",
      details:
        "AlphaFold tackled protein folding using deep learning, shortening discovery time and advancing drug design and disease understanding.",
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

  // Bias Detection Insights content
  const biasInsightsDetails = (
    <>
      <p>
        This section offers detailed explanations of potential biases in AI
        models and mitigation efforts by developers. Explore interactive methods
        and visualizations below.
      </p>
      <p>
        Bias in AI can originate from multiple sources, including biased
        training data, unintended algorithmic behavior, and insufficient model
        testing. Detecting and mitigating these biases is critical to ensuring
        fair and equitable AI applications.
      </p>
      <h4>Types of Bias in AI Models:</h4>
      <ul>
        <li>
          <strong>Data Bias:</strong> Occurs when the training data does not
          adequately represent all user groups, leading to skewed outcomes.
        </li>
        <li>
          <strong>Labeling Bias:</strong> Happens when human-labeled data
          includes subjective or incorrect classifications, reflecting personal
          biases.
        </li>
        <li>
          <strong>Algorithmic Bias:</strong> Arises when AI models reinforce
          existing biases due to optimization based on skewed datasets.
        </li>
        <li>
          <strong>Deployment Bias:</strong> When AI models behave differently
          in real-world conditions compared to training environments.
        </li>
        <li>
          <strong>Automation Bias:</strong> Users relying too much on AI
          decisions without questioning their validity.
        </li>
      </ul>
      <h4>Bias Detection Methods:</h4>
      <ul>
        <li>
          <strong>Data Auditing:</strong> Analyzing datasets for imbalances or
          underrepresentation of certain demographics.
        </li>
        <li>
          <strong>Fairness Metrics:</strong> Using statistical fairness
          measures like disparate impact and demographic parity.
        </li>
        <li>
          <strong>Adversarial Testing:</strong> Stress-testing AI models to
          detect and mitigate bias.
        </li>
        <li>
          <strong>Human Oversight:</strong> Incorporating domain experts to
          review AI outputs and ensure fairness.
        </li>
      </ul>
      <h4>Mitigation Strategies:</h4>
      <ul>
        <li>
          <strong>Diverse Training Data:</strong> Ensuring datasets include
          representation from all user groups.
        </li>
        <li>
          <strong>Fairness-aware Algorithms:</strong> Adjusting models to
          minimize discrimination.
        </li>
        <li>
          <strong>Explainability Tools:</strong> Implementing methods that make
          AI decisions more transparent.
        </li>
        <li>
          <strong>Regulatory Compliance:</strong> Adhering to ethical AI
          guidelines and regulations.
        </li>
        <li>
          <strong>Continuous Monitoring:</strong> Regularly auditing AI models
          to identify and correct bias over time.
        </li>
      </ul>
      <p>
        By applying these techniques, organizations can create fairer AI
        systems that are more ethical and accountable.
      </p>
    </>
  );

  return (
    <div className="explainability-page">
      <h1 className="heading">AI Model Explainability Page</h1>

      <div className="main-content">
        <div className="section">
          <h2>Model Explainability Visuals</h2>
          <div className="mermaid">Loading...</div>
          <div className="description-box">
            <h3>Stage Description</h3>
            <p>
              {description ||
                "Click on a node in the flowchart to see its description."}
            </p>
          </div>
        </div>

        <div className="section">
          <h2>Bias Detection Insights</h2>
          {biasInsightsDetails}
        </div>
      </div>

      <aside className="educational-resources">
        <h2>Educational Resources</h2>
        <ul>
          {educationalResources.map((item) => (
            <li key={item.id}>
              <strong
                onClick={() => toggleExpand(item.id)}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </strong>
              <p>{item.description}</p>
              {expandedItems[item.id] && (
                <div>
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
      </aside>
    </div>
  );
};

export default ExplainabilityPage;
