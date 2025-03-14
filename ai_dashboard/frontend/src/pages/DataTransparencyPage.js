import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import './DataTransparencyPage.css';

const DataTransparencyPage = () => {
    const [dataCollectionInfo, setDataCollectionInfo] = useState([]);
    const [policySummaries, setPolicySummaries] = useState([]);
    const [comparisonData, setComparisonData] = useState([]);

    useEffect(() => {
        const fetchDataCollectionInfo = async () => {
            try {
                const response = await fetch('/api/data-collection/');
                const text = await response.text();
                console.log('Data Collection Info response text:', text);
                try {
                    const data = JSON.parse(text);
                    setDataCollectionInfo(data);
                } catch (error) {
                    console.error('Error parsing data collection info JSON:', error);
                    console.log('Data Collection Info response text:', text);
                }
            } catch (error) {
                console.error('Error fetching data collection info:', error);
            }
        };

        const fetchPolicySummaries = async () => {
            try {
                const response = await fetch('/api/policy-summaries/');
                const text = await response.text();
                console.log('Policy Summaries response text:', text);
                try {
                    const data = JSON.parse(text);
                    setPolicySummaries(data);
                } catch (error) {
                    console.error('Error parsing policy summaries JSON:', error);
                    console.log('Policy Summaries response text:', text);
                }
            } catch (error) {
                console.error('Error fetching policy summaries:', error);
            }
        };

        const fetchComparisonData = async () => {
            try {
                const response = await fetch('/api/comparison-data/');
                const text = await response.text();
                console.log('Comparison Data response text:', text);
                try {
                    const data = JSON.parse(text);
                    setComparisonData(data);
                } catch (error) {
                    console.error('Error parsing comparison data JSON:', error);
                    console.log('Comparison Data response text:', text);
                }
            } catch (error) {
                console.error('Error fetching comparison data:', error);
            }
        };

        fetchDataCollectionInfo();
        fetchPolicySummaries();
        fetchComparisonData();
    }, []);

    return (
        <div className="data-transparency-page">
            <h1 className="heading">AI Model Data Transparency Page</h1>

            <section className="data-collection-section">
                <h2>Detailed Data Collection Overview</h2>
                {dataCollectionInfo.map(info => (
                    <div key={info.id} className="data-collection-card">
                        <h3>{info.modelName}</h3>
                        <p><strong>Types of Data Collected:</strong> {info.dataTypes}</p>
                        <p><strong>How Data is Collected:</strong> {info.collectionMethods}</p>
                        <p><strong>How Data is Used:</strong> {info.usage}</p>
                    </div>
                ))}
            </section>

            <section className="policy-summary-section">
                <h2>AI Policy Summarization</h2>
                {policySummaries.map(summary => (
                    <div key={summary.id} className="policy-summary-card">
                        <h3>{summary.modelName}</h3>
                        <p>{summary.summary}</p>
                    </div>
                ))}
            </section>

            <section className="comparison-table-section">
                <h2>Comparison Table</h2>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th>Model Name</th>
                            <th>Data Retention Policies</th>
                            <th>Third-Party Sharing Practices</th>
                            <th>Regulatory Compliance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map(model => (
                            <tr key={model.id}>
                                <td>{model.modelName}</td>
                                <td>{model.dataRetentionPolicies}</td>
                                <td>{model.thirdPartySharing}</td>
                                <td>{model.regulatoryCompliance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="privacy-impact-section">
                <h2>Visual Privacy Impact Assessments</h2>
                <div id="privacyImpactChart" className="chart"></div>
            </section>
        </div>
    );
};

export default DataTransparencyPage;
