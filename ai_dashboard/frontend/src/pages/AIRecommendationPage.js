import React, { useState, useEffect } from 'react';
import './AIRecommendationPage.css';

const AIRecommendationPage = () => {
    const [features, setFeatures] = useState([]);
    const [selectedFeature, setSelectedFeature] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/features/`)
            .then(response => response.json())
            .then(data => setFeatures(data));
    }, []);

    const handleCardClick = (feature) => {
        setSelectedFeature(feature); // Set the clicked feature as the selected one
    };

    const closeModal = () => {
        setSelectedFeature(null); // Close the modal by clearing the selected feature
    };

    return (
        <div className="recommendation-dashboard">
            {features.map((feature) => (
                <div 
                    key={feature.id} 
                    className="feature-card" 
                    onClick={() => handleCardClick(feature)}
                >
                    <h3>{feature.name}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
            {selectedFeature && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedFeature.recommended_model}</h3>
                        <p>{selectedFeature.recommendation_reason}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIRecommendationPage;
