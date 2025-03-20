import React, { useState, useEffect } from 'react';
import './AIRecommendationPage.css';

const AIRecommendationPage = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/features/')
            .then(response => response.json())
            .then(data => setFeatures(data));
    }, []);

    return (
        <div className="recommendation-dashboard">
            {features.map((feature) => (
                <div 
                    key={feature.id} 
                    className="feature-card" 
                    onClick={() => alert(feature.recommended_model + ': ' + feature.recommendation_reason)}
                >
                    <h3>{feature.name}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AIRecommendationPage;
