import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
    const [models, setModels] = useState([]);
    const [newScores, setNewScores] = useState({});

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/home/models/")
            .then((response) => setModels(response.data))
            .catch((error) => console.error("Error fetching AI models:", error));
    }, []);

    const handleScoreInput = (id, value) => {
        setNewScores({ ...newScores, [id]: value });
    };

    const submitScore = (id) => {
        const score = newScores[id];
        if (score >= 0 && score <= 10) {
            axios.post(`http://127.0.0.1:8000/home/models/${id}/submit-score/`, { score })
                .then(() => {
                    alert("Score submitted successfully.");
                    axios.get("http://127.0.0.1:8000/home/models/")
                        .then((response) => setModels(response.data));
                })
                .catch((error) => console.error("Error submitting score:", error));
        } else {
            alert("Please enter a score between 0 and 10.");
        }
    };

    const getTrustScoreIndicator = (score) => {
        if (score < 4) return "🔴";
        if (score >= 4 && score < 7) return "🟡";
        return "🟢";
    };

    return (
        <div className="page-container">
            <div className="left-section">
                <h1>AI Transparency Dashboard</h1>
                <p>
                    Artificial intelligence is a powerful tool that influences decisions in critical areas such as hiring, healthcare, and law enforcement.
                    However, for AI to be trusted, it is essential to understand how it reaches its conclusions. This is where AI transparency becomes crucial,
                    as it allows people to see how an AI system operates rather than treating it as a "black box."
                    Understanding how AI works helps prevent unintended harm and ensures that these systems remain ethical, accountable, and beneficial for society.
                </p>

                <h2>AI Controversies</h2>
                <p>
                    A lack of transparency in AI has led to several controversies. In 2018, Amazon scrapped its AI hiring tool after discovering it favored male candidates.
                    The COMPAS system used in US courts disproportionately classified Black defendants as high-risk.
                    Predictive policing in Chicago targeted low-income and minority areas. Apple's AI credit card assigned lower limits to women. GPT-4 was criticized for bias and misinformation.
                </p>

                <h2>How Transparency Levels Are Determined</h2>
                <p>
                    Transparency Level is High, Medium, or Low based on available information about a model's training data, algorithms, and documentation.
                    High = Open-source or detailed public research. Medium = Partial disclosures. Low = Minimal transparency (black-box).
                </p>

                <h2>What Is the Trust Score?</h2>
                <p>
                    The Trust Score reflects real user ratings for each AI model on factors like accuracy, fairness, and transparency.
                    Scores are averaged in real time and shown using colored indicators: 🔴 (low), 🟡 (medium), 🟢 (high).
                </p>
            </div>

            <div className="right-section">
                <div className="table-section">
                    <h2>Comparison Table</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Use Cases</th>
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
                                        {model.average_trust_score !== "Not Rated" ? (
                                            <>
                                                {getTrustScoreIndicator(model.average_trust_score)}
                                                {` ${parseFloat(model.average_trust_score).toFixed(2)}/10`}
                                            </>
                                        ) : "Not Rated"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

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
