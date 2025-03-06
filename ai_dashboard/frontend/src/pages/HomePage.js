import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
    const [models, setModels] = useState([]);
    
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/home/models/")
            .then((response) => setModels(response.data))
            .catch((error) => console.error("Error fetching AI models:", error));
    }, []);
    
    return (
        <div className="page-container">
            <div className="intro-section">
                <h1>AI Transparency Dashboard</h1>
                <p>
                    Welcome to the AI Transparency Dashboard. This platform provides 
                    information about various AI models, their transparency levels, 
                    and trust scores to help you make informed decisions.
                </p>
                <p>
                    Compare different models across companies and understand how they 
                    rank in terms of transparency and trustworthiness.
                </p>
            </div>
            
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Transparency</th>
                            <th>Trust Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {models.map((model) => (
                            <tr key={model.id}>
                                <td>{model.name}</td>
                                <td>{model.company}</td>
                                <td>{model.transparency_level}</td>
                                <td>{model.trust_score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HomePage;