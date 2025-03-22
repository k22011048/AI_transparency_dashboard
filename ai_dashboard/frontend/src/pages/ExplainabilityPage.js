import React, { useEffect, useState } from "react";
import "./ExplainabilityPage.css";

const ExplainabilityPage = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [description, setDescription] = useState("");
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

    // AI stages data
  const aiStages = [
    {
      id: 1,
      title: "User Input",
      description:
        "The AI receives input from the user, such as text, voice, or images. This marks the starting point of the interaction.",
    },
    {
      id: 2,
      title: "Process Input",
      description:
        "The input is pre-processed by tokenizing and encoding it into a numerical format that the AI model can understand.",
      subStages: [
        {
          title: "Tokenize & Encode",
          description:
            "The input is broken into smaller units (tokens), such as words or subwords, and converted into numerical vectors for AI processing.",
        },
      ],
    },
    {
      id: 3,
      title: "Analyze Context",
      description:
        "The AI identifies patterns, intent, and context from the input, ensuring relevance and coherence in its response.",
      subStages: [
        {
          title: "Analyze Context",
          description:
            "The system examines relationships and patterns in the input, leveraging past interactions or data if necessary.",
        },
      ],
    },
    {
      id: 4,
      title: "Generate Response",
      description:
        "Using its trained model, the AI generates an initial response based on the user's input and the identified context.",
      subStages: [
        {
          title: "Predict Next Step",
          description:
            "The AI predicts the next logical output by leveraging the patterns it learned during training.",
        },
        {
          title: "Fine-Tune Output",
          description:
            "The generated content is adjusted to ensure relevance, appropriateness, and alignment with the user's intent.",
        },
      ],
    },
    {
      id: 5,
      title: "Refine & Adjust",
      description:
        "The AI refines the output by applying quality checks, safety rules, and moderation to ensure it meets ethical standards.",
      subStages: [
        {
          title: "Apply Rules & Filters",
          description:
            "The AI applies predefined rules to filter out harmful, biased, or inappropriate content.",
        },
        {
          title: "Check for Issues",
          description:
            "The output is reviewed to ensure there are no errors or safety concerns, and it aligns with quality standards.",
        },
      ],
    },
    {
      id: 6,
      title: "Send Output",
      description:
        "The finalized response is sent to the user in the appropriate format, completing the interaction process.",
    },
  ];

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
        " DeepMind’s AlphaFold revolutionized biology by predicting protein structures with high accuracy.",
      details:
        "AlphaFold tackled protein folding using deep learning, shortening discovery time and advancing drug design and disease understanding.",
    },
    {
      id: 4,
      title: "Case Study: Singapore’s GovTech Chatbots",
      description:
        "Singapore’s government introduced AI-powered chatbots to improve public service delivery.",
      details:
        'The introduction of chatbots like "Ask Jamie" enabled Singapore to manage millions of citizen inquiries efficiently. The chatbots understood natural language and responded to FAQs related to public services, functioning 24/7 without human intervention. By openly addressing data privacy concerns and ensuring secure communication channels, the government fostered public trust in AI technologies while significantly reducing operational costs and response times.',
    },
    {
      id: 5,
      title: "Case Study: Predictive Policing in the US",
      description: "Predictive policing systems faced challenges in addressing systemic biases.",
      details:
        "Predictive policing tools were designed to analyze historical crime data and predict areas of potential criminal activity. However, biases in the training data—such as over-policing in minority neighborhoods—led to disproportionate targeting of specific demographic groups. While efforts to include fairness algorithms and increase transparency improved the situation in some cases, many systems continued to face criticism, highlighting the importance of ethical data use and stakeholder involvement in AI deployment.",
    },
    {
      id: 6,
      title: "Case Study: BBVA’s Digital Transformation",
      description: "BBVA used AI for personalized services and improved customer onboarding.",
      details:
        "BBVA leveraged AI for customer segmentation, providing tailored financial product recommendations. Through transparency in their AI processes—such as explaining why a customer was offered a particular loan or service—the bank built trust and compliance with regulatory standards. The improved user experience and customer satisfaction levels resulted in BBVA being recognized as a leader in ethical AI implementation in the financial industry.",
    },
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
          <div className="flowchart">
            <img
              src="/mermaid-diagram-2025-03-21-175131.svg"
              alt="AI Decision Making Flowchart"
              className="flowchart-image"
              onClick={toggleOverlay}
              style={{
                cursor: "pointer",
                width: "100%", 
                maxWidth: "1200px",
                height: "auto", 
                display: "block",
                margin: "auto",
              }}
            />
          </div>

          {isOverlayOpen && (
            <div className="overlay" onClick={toggleOverlay}>
              <div className="overlay-content">
                <img
                  src="/mermaid-diagram-2025-03-21-175131.svg"
                  alt="Expanded AI Flowchart"
                  className="expanded-image"
                  style={{
                    maxWidth: "95%", // Use most of the viewport for enlargement
                    maxHeight: "90%", // Ensure proper scaling
                    display: "block",
                    margin: "auto",
                  }}
                />
                <p style={{ textAlign: "center", color: "white" }}>Click anywhere to close.</p>
              </div>
            </div>
          )}
          <div className="description-box">
            <h3>AI Decision-Making Process</h3>
            <ul>
              {aiStages.map((stage) => (
                <li key={stage.id} style={{ marginBottom: "20px" }}>
                  <strong>{stage.title}:</strong> {stage.description}
                  {stage.subStages && (
                    <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                      {stage.subStages.map((subStage, idx) => (
                        <li key={idx} style={{ marginBottom: "10px" }}>
                          <strong>{subStage.title}:</strong> {subStage.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
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