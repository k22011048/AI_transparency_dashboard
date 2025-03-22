import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ModelDetailsPage.css";

const AIModelList = () => {
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);

    useEffect(() => {
        // Fetch AI models data from the backend
        axios
            .get("http://127.0.0.1:8000/api/ai-models/ai-models/")
            .then((response) => {
                console.log("API Response:", response.data); // Debugging
                setModels(response.data);

                // Automatically select the first model if available
                if (response.data.length > 0) {
                    setSelectedModel(response.data[0]);
                }
            })
            .catch((error) => console.error("Error fetching AI models:", error));
    }, []);

    return (
        <div className="ai-models-page">
            {/* Tabs Section */}
            <ul className="tabs">
                {Array.isArray(models) &&
                    models.map((model) => (
                        <li
                            key={model.id}
                            className={selectedModel?.id === model.id ? "active" : ""}
                            onClick={() => setSelectedModel(model)} // Set the selected model on click
                        >
                            {model.name}
                        </li>
                    ))}
            </ul>

            {/* Model Details Section */}
            {selectedModel && (
                <div className="model-details">
                    <h3>{selectedModel.name}</h3>
                    <p>
                        <strong>Description:</strong> {selectedModel.description}
                    </p>
                    <p>
                        <strong>Use Cases:</strong> {selectedModel.useCases}
                    </p>
                    <p>
                        <strong>Developer:</strong> {selectedModel.developer}
                    </p>
                    <p>
                        <strong>Launch Date:</strong> {selectedModel.launchDate}
                    </p>
                    <p>
                        <strong>Transparency Level:</strong> {selectedModel.transparencyLevel}
                    </p>
                    <p>
                        <strong>Model Size:</strong> {selectedModel.modelSize}
                    </p>
                    <img
                        src={`http://127.0.0.1:8000${selectedModel.architectureDiagram}`}
                        alt="Architecture Diagram"
                        className="architecture-diagram"
                    />
                    <p>
                        <strong>Architecture Description:</strong> {selectedModel.architectureDescription}
                    </p>
                    <p>
                        <strong>Training Data:</strong> {selectedModel.trainingData}
                    </p>
                </div>
            )}
        </div>
    );
};

export default AIModelList;
