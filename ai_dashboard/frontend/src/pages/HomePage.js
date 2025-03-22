import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
    const [models, setModels] = useState([]);
    const [newScores, setNewScores] = useState({});

    useEffect(() => {
        // Fetch AI models data from the backend
        axios.get("http://127.0.0.1:8000/home/models/")
            .then((response) => setModels(response.data))
            .catch((error) => console.error("Error fetching AI models:", error));
    }, []);

    const handleScoreInput = (id, value) => {
        // Update the state with the new score input for a specific model
        setNewScores({ ...newScores, [id]: value });
    };

    const submitScore = (id) => {
        const score = newScores[id];
        if (score >= 0 && score <= 10) {
            // Submit the score to the backend
            axios.post(`http://127.0.0.1:8000/home/models/${id}/submit-score/`, { score })
                .then(() => {
                    alert("Score submitted successfully.");
                    // Refresh models data after submission
                    axios.get("http://127.0.0.1:8000/home/models/")
                        .then((response) => setModels(response.data));
                })
                .catch((error) => console.error("Error submitting score:", error));
        } else {
            alert("Please enter a score between 0 and 10.");
        }
    };

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
            {/* Left Section: Descriptive Paragraphs */}
            <div className="left-section">
                <h1>AI Transparency Dashboard</h1>
                <p>
                    Artificial intelligence is a powerful tool that influences decisions in critical areas such as hiring, healthcare, and law enforcement. However, for AI to be trusted, it is essential to understand how it reaches its conclusions. This is where AI transparency becomes crucial, as it allows people to see how an AI system operates rather than treating it as a "black box." Without transparency, AI systems can make decisions that seem biased or unfair, sometimes with serious consequences. Understanding how AI works helps prevent unintended harm and ensures that these systems remain ethical, accountable, and beneficial for society.
                </p>
                <h1>AI Controversies</h1>
                <p>
                    A lack of transparency in AI has led to several controversies, highlighting the risks of hidden decision-making. In 2018, Amazon scrapped its AI hiring tool after discovering it favoured male candidates, reflecting biases in its training data. Similarly, the COMPAS system, used in US courts since 2016, was found to disproportionately classify Black defendants as high-risk, raising concerns about fairness in criminal justice.
                </p>
                <p>
                    Predictive policing also faced scrutiny in 2020 when the Chicago Police Department’s AI system disproportionately targeted low-income and minority areas, reinforcing over-policing. In financial services, Apple’s AI-powered credit card was criticised in 2019 for assigning lower credit limits to women, despite similar financial profiles to men. More recently, in 2023, OpenAI’s GPT-4 was accused of generating misinformation and biased content, with critics calling for greater transparency in large language models.
                </p>
                <h1>How We Calculated These Values</h1>
                <p>
                    Transparency Level is High, Medium, or Low based on publicly available information about a model's training data, algorithms, and documentation. High is for widespread transparency with open-source elements or detailed research papers. Medium is for models with some disclosures but without critical details. Low is for proprietary, black-box systems with minimal public information. Ratings are provided based on official documentation, research, and company releases.
                </p>
                <p>
                    The Average User Trust Score is calculated from direct user feedback received from users who access the AI model's page. The users can give a rating of how much they trust the model based on factors such as accuracy, reliability, ethics, and transparency. The trust score appears as an average of all ratings given and is updated in real-time as more users submit their ratings. If there are no ratings, the model is initially shown as "Not Rated." The ratings mechanism ensures that trust levels are founded on real-world user experience and, as such, represent a useful indicator of public confidence in each AI model.
                </p>
            </div>

            {/* Right Section: Tables */}
            <div className="right-section">
                {/* Comparison Table */}
                <div className="table-section">
                    <h2>Comparison Table</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Primary Use Cases</th>
                                <th>Transparency</th>
                                <th>Average Trust Score</th>
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
                                        {model.average_trust_score ? (
                                            <>
                                                {getTrustScoreIndicator(model.average_trust_score)}
                                                {` ${parseFloat(model.average_trust_score).toFixed(2)}/10`} {/* Convert to float and format to 2 decimal places */}
                                            </>
                                        ) : (
                                            "Not Rated"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Submission Table */}
                <div className="rating-section">
                    <h2>Submit Your Ratings</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Your Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {models.map((model) => (
                                <tr key={model.id}>
                                    <td>{model.company}</td>
                                    <td>
                                        <input
                                            className="rating-input"
                                            type="number"
                                            min="0"
                                            max="10"
                                            placeholder="Rate (0-10)"
                                            onChange={(e) => handleScoreInput(model.id, e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            className="submit-button"
                                            onClick={() => submitScore(model.id)}
                                        >
                                            Submit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
