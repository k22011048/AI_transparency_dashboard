import React, { useEffect, useState } from 'react';
import Plotly from 'plotly.js-dist';
import './ExplainabilityPage.css';

const ExplainabilityPage = () => {
    const [modelData, setModelData] = useState([]);
    const [biasData, setBiasData] = useState([]);
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const modelRes = await fetch('/api/model-explainability/');
                const modelText = await modelRes.text();
                try {
                    const modelJson = JSON.parse(modelText);
                    setModelData(modelJson);
                } catch (e) {
                    console.error('Error parsing model explainability JSON:', e);
                    console.log('Response text:', modelText);
                }

                const biasRes = await fetch('/api/bias-detection/');
                const biasText = await biasRes.text();
                try {
                    const biasJson = JSON.parse(biasText);
                    setBiasData(biasJson);
                } catch (e) {
                    console.error('Error parsing bias detection JSON:', e);
                    console.log('Response text:', biasText);
                }

                const resourcesRes = await fetch('/api/educational-resources/');
                const resourcesText = await resourcesRes.text();
                try {
                    const resourcesJson = JSON.parse(resourcesText);
                    setResources(resourcesJson);
                } catch (e) {
                    console.error('Error parsing educational resources JSON:', e);
                    console.log('Response text:', resourcesText);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

        const data = [{ x: [1, 2, 3, 4, 5], y: [10, 15, 13, 17, 10], type: 'scatter' }];
        Plotly.newPlot('modelChart', data);
    }, []);

    return (
        <div className="explainability-page">
            <h1 className="heading">AI Model Explainability Page</h1>
            <div className="section">
                <h2 className="heading">Model Explainability Visuals</h2>
                <div id="modelChart" className="chart"></div>
            </div>
            <div className="section">
                <h2 className="heading">Bias Detection Insights</h2>
                {biasData.map((item) => (
                    <p key={item.id}>{item.description}</p>
                ))}
            </div>
            <div className="section">
                <h2 className="heading">Educational Resources</h2>
                <ul className="resource-list">
                    {resources.map((item) => (
                        <li key={item.id} className="resource-item">
                            <strong>{item.title}:</strong> {item.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExplainabilityPage;
