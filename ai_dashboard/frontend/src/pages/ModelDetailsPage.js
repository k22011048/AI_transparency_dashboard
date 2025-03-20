import React, { useState, useEffect } from "react";
import axios from "axios";

const ModelDetailsPage = () => {
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/ai-models/")
            .then((response) => {
                console.log(response.data); // Debug: Ensure data is fetched
                setModels(response.data);
            })
            .catch((error) => {
                console.error("Error fetching AI models:", error);
            });
    }, []);

    return (
        <div className="model-details-page">
            <h2 className="heading">AI Models</h2>
            <ul>
                {models.map((model) => (
                    <li key={model.id} onClick={() => setSelectedModel(model)}>
                        {model.name}
                    </li>
                ))}
            </ul>
            {selectedModel && (
                <div className="model-info">
                    <h3>Model Details</h3>
                    <p><strong>Name:</strong> {selectedModel.name}</p>
                    <p><strong>Description:</strong> {selectedModel.description}</p>
                    <p><strong>Use Cases:</strong> {selectedModel.useCases}</p>
                    <p><strong>Developer:</strong> {selectedModel.developer}</p>
                    <p><strong>Launch Date:</strong> {selectedModel.launchDate}</p>
                    <p><strong>Transparency Level:</strong> {selectedModel.transparencyLevel}</p>
                    <p><strong>Model Size:</strong> {selectedModel.modelSize}</p>
                </div>
            )}
        </div>
    );
};

export default ModelDetailsPage;
