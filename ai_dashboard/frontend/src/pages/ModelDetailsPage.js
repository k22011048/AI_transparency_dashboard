import React, { useState, useEffect } from 'react';
import './ModelDetailsPage.css';

const ModelDetailsPage = ({ modelId }) => {
    const [modelInfo, setModelInfo] = useState(null);
    const [trustScore, setTrustScore] = useState(5);
    const [averageTrustScore, setAverageTrustScore] = useState(null);
    const [ratingCount, setRatingCount] = useState(0);

    useEffect(() => {
        const fetchModelDetails = async () => {
            try {
                const response = await fetch(`/api/models/${modelId}/`);
                const text = await response.text();
                console.log('Model Details response text:', text);
                try {
                    const data = JSON.parse(text);
                    setModelInfo(data);
                } catch (error) {
                    console.error('Error parsing model details JSON:', error);
                    console.log('Model Details response text:', text);
                }
            } catch (error) {
                console.error('Error fetching model details:', error);
            }
        };

        const fetchAverageTrustScore = async () => {
            try {
                const response = await fetch(`/api/models/${modelId}/trust-score/`);
                const text = await response.text();
                console.log('Average Trust Score response text:', text);
                try {
                    const data = JSON.parse(text);
                    setAverageTrustScore(data.average);
                    setRatingCount(data.count);
                } catch (error) {
                    console.error('Error parsing average trust score JSON:', error);
                    console.log('Average Trust Score response text:', text);
                }
            } catch (error) {
                console.error('Error fetching average trust score:', error);
            }
        };

        fetchModelDetails();
        fetchAverageTrustScore();
    }, [modelId]);

    const handleTrustScoreChange = (e) => {
        setTrustScore(e.target.value);
    };

    const handleTrustScoreSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/models/${modelId}/trust-score/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ score: trustScore }),
            });
            const text = await response.text();
            console.log('Trust Score Submit response text:', text);
            try {
                const data = JSON.parse(text);
                setAverageTrustScore(data.average);
                setRatingCount(data.count);
                alert('Trust score submitted successfully!');
            } catch (error) {
                console.error('Error parsing trust score submit JSON:', error);
                console.log('Trust Score Submit response text:', text);
                alert('Failed to submit trust score. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting trust score:', error);
            alert('Failed to submit trust score. Please try again.');
        }
    };

    if (!modelInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="model-details-page">
            <h1 className="heading">Model Details: {modelInfo.name}</h1>
            <div className="model-info">
                <p><strong>Description:</strong> {modelInfo.description}</p>
                <p><strong>Use Cases:</strong> {modelInfo.useCases}</p>
                <p><strong>Transparency Level:</strong> {modelInfo.transparencyLevel}</p>
                <p><strong>Developer/Organization:</strong> {modelInfo.developer}</p>
                <p><strong>Launch Date:</strong> {modelInfo.launchDate}</p>
                <p><strong>Model Size:</strong> {modelInfo.modelSize}</p>
            </div>

            <div className="model-architecture">
                <h2>Model Architecture</h2>
                <img src={modelInfo.architectureDiagram} alt="Model Architecture" />
                <p>{modelInfo.architectureDescription}</p>
            </div>

            <div className="training-data">
                <h2>Training Data Overview</h2>
                <p>{modelInfo.trainingData}</p>
            </div>

            <div className="trust-score-section">
                <h2>Submit Your Trust Score</h2>
                <form onSubmit={handleTrustScoreSubmit}>
                    <label>
                        Enter your Trust Score (1-10):
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={trustScore}
                            onChange={handleTrustScoreChange}
                            className="trust-score-input"
                        />
                    </label>
                    <button type="submit" className="submit-button">Submit</button>
                </form>

                <h2>Average Trust Score</h2>
                <p className="average-trust-score">
                    {averageTrustScore ? `${averageTrustScore}/10 (based on ${ratingCount} ratings)` : 'No ratings yet'}
                </p>
            </div>

            <div className="regulatory-links">
                <h2>External Regulatory Bodies</h2>
                <ul>
                    <li><a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer">GDPR</a></li>
                    <li><a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer">CCPA</a></li>
                    {/* Add more regulatory links as needed */}
                </ul>
            </div>
        </div>
    );
};

export default ModelDetailsPage;
