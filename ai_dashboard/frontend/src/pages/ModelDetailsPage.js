import React, { useState, useEffect } from "react";
import axios from "axios";
//import TrustScoreDetails from "./TrustScoreDetails";

const AIModelList = () => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/ai-models/")

      .then((response) => {
        setModels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching AI models:", error);
      });
  }, []);

  return (
    <div>
      <h2>AI Models</h2>
      <ul>
        {models.map((model) => (
          <li key={model.id} onClick={() => setSelectedModel(model)}>
            {model.name}
          </li>
        ))}
      </ul>

      {selectedModel && (
        <div>
          <h3>Model Details</h3>
          <p><strong>Name:</strong> {selectedModel.name}</p>
          <p><strong>Description:</strong> {selectedModel.description}</p>
          <p><strong>Use Cases:</strong> {selectedModel.useCases}</p>
          <p><strong>Developer:</strong> {selectedModel.developer}</p>
          <p><strong>Launch Date:</strong> {selectedModel.launchDate}</p>
          <p><strong>Transparency Level:</strong> {selectedModel.transparencyLevel}</p>
          <p><strong>Model Size:</strong> {selectedModel.modelSize}</p>
          {/* <img 
            src={`http://127.0.0.1:8000/media/${selectedModel.architectureDiagram}`} 
            alt="Architecture Diagram" 
            style={{ width: "300px", height: "auto" }} 
          /> */}
          {/* <TrustScoreDetails modelId={selectedModel.id} /> */}
        </div>
      )}
    </div>
  );
};

export default AIModelList;
