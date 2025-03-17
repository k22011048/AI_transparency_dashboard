import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/home/models/")
            .then((response) => setModels(response.data))
            .catch((error) => console.error("Error fetching AI models:", error));
    }, []);

    // Function to get color-coded indicator based on trust score out of 10
    const getTrustScoreIndicator = (score) => {
        if (score < 4) {
            return "🔴"; // Low score (Red)
        } else if (score >= 4 && score < 7) {
            return "🟡"; // Medium score (Yellow)
        } else {
            return "🟢"; // High score (Green)
        }
    };

    return (
        <div className="page-container">
            {/* Left Section: Paragraphs */}
            <div className="left-section">
                <h1>AI Transparency Dashboard</h1>
                <p>
                    Imagine artificial intelligence as a powerful assistant, helping to make important decisions in areas like hiring, healthcare, and law enforcement. But for us to trust these decisions, we need to understand how they are made. This is where AI transparency comes in—it's like switching on a light to see inside a mysterious machine.
                </p>
                <p>
                    Without transparency, AI systems can make decisions that seem unfair or biased. For example, Amazon once had to stop using an AI hiring tool because it favoured male candidates over female ones. In another case, the Chicago Police Department used an AI system to predict where crimes might happen, but it unfairly targeted certain communities. These problems happened because people couldn't see how the AI made its decisions.
                </p>
                <p>
                    When AI systems are open and clear, we can spot and fix issues before they cause harm. Research shows that 78% of people are worried about the lack of transparency in AI, which highlights the need for AI to be easy to understand. Transparent AI isn't just a nice feature—it's essential for building trust and making sure AI is fair and beneficial for everyone. Let's work towards a future where AI helps everyone equally and ethically.
                </p>
                <h1>How We Calculated These Values</h1>
                <p>
                    Transparency Level is High, Medium, or Low based on publicly available information about a model's training data, algorithms, and documentation. High is for widespread transparency with open-source elements or detailed research papers. Medium is for models with some disclosures but without critical details. Low is for proprietary, black-box systems with minimal public information. Ratings are provided based on official documentation, research, and company releases.
                </p>
                <p>
                    The Average User Trust Score is calculated from direct user feedback received from users who access the AI model's page. The users can give a rating of how much they trust the model based on factors such as accuracy, reliability, ethics, and transparency. The trust score appears as an average of all ratings given and is updated in real-time as more users submit their ratings. If there are no ratings, the model is initially shown as "Not Rated." The ratings mechanism ensures that trust levels are founded on real-world user experience and, as such, represent a useful indicator of public confidence in each AI model.
                </p>
            </div>

            {/* Right Section: Introduction and Table */}
            <div className="right-section">
                <div className="intro-table-container">
                    {/* Table Section */}
                    <div className="table-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Primary Use Cases</th>
                                    <th>Transparency</th>
                                    <th>Trust Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {models.map((model) => (
                                    <tr key={model.id}>
                                        <td>{model.name}</td>
                                        <td>{model.company}</td>
                                        <td>{model.use_cases}</td>
                                        <td>{model.transparency_level}</td>
                                        <td>
                                            {getTrustScoreIndicator(model.trust_score)} {/* Color-coded icon */}
                                            {` ${model.trust_score}/10`} {/* Display score out of 10 */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
