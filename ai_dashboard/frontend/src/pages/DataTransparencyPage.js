import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './DataTransparencyPage.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DataTransparencyPage = () => {
    const [policySummaries, setPolicySummaries] = useState([]);
    const [comparisonData, setComparisonData] = useState([]);
    const [chartData, setChartData] = useState(null);
    const [sharingChartData, setSharingChartData] = useState(null);
    const [expandedSummary, setExpandedSummary] = useState(null);

    useEffect(() => {
        const fetchPolicySummaries = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/data-transparency/policy-summaries/');
            setPolicySummaries(response.data);
        };

        const fetchComparisonData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/data-transparency/comparison-data/');
            setComparisonData(response.data);
        };

        const fetchChartData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/data-transparency/chart-data/');
            const barData = response.data.find(d => d.chartType === 'bar');
            const pieData = response.data.find(d => d.chartType === 'pie');

            if (barData) {
                setChartData({
                    labels: barData.labels,
                    datasets: [{
                        label: barData.modelName,
                        data: barData.values,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }],
                });
            }

            if (pieData) {
                setSharingChartData({
                    labels: pieData.labels,
                    datasets: [{
                        data: pieData.values,
                        backgroundColor: ['#337880', '#aedfe2'],  // Matches your colour scheme
                        borderWidth: 1,
                    }],
                });
            }
        };

        fetchPolicySummaries();
        fetchComparisonData();
        fetchChartData();
    }, []);

    return (
        <div className="data-transparency-page">
            <h1 className="heading">AI Model Data Transparency Page</h1>

            <section className="policy-summary-section">
                <h2>AI Policy Summarization</h2>
                {policySummaries.length > 0 ? (
                    policySummaries.map((summary) => (
                        <div
                            key={summary.id}
                            className="policy-summary-card"
                            onClick={() => setExpandedSummary(expandedSummary === summary.id ? null : summary.id)}
                        >
                            <h3>{summary.modelName}</h3>
                            <p>{summary.summary}</p>
                            {expandedSummary === summary.id && (
                                <div className="policy-details">
                                    <p>{summary.details}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No policy summaries available.</p>
                )}
            </section>

            <section className="comparison-table-section">
                <h2>Comparison Table</h2>
                {comparisonData.length > 0 ? (
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Model Name</th>
                                <th>Data Retention</th>
                                <th>Third-Party Sharing</th>
                                <th>Compliance</th>
                                <th>Storage Location</th>
                                <th>Encryption</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((model) => (
                                <tr key={model.id}>
                                    <td>{model.modelName}</td>
                                    <td>{model.dataRetentionPolicies}</td>
                                    <td>{model.thirdPartySharing}</td>
                                    <td>{model.regulatoryCompliance}</td>
                                    <td>{model.dataStorageLocation}</td>
                                    <td>
                                        <span title="TLS: Encryption in transit. AES-256: Strong encryption for data storage. AES-GCM: Advanced mode providing confidentiality and integrity. End-to-end encryption: Data is only readable by sender and receiver.">
                                            {model.encryptionStandards}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No comparison data available.</p>
                )}
            </section>

            <section className="privacy-impact-section">
                <h2>Data Retention Comparison</h2>
                {chartData ? <Bar data={chartData} /> : <p>No chart data available.</p>}

                <h2>Third-Party Sharing Overview</h2>
                {sharingChartData ? <Pie data={sharingChartData} className="small-pie-chart" /> : <p>No chart data available.</p>}

                <section className="third-party-sharing-explanation">
                    <h3>What Does Third-Party Sharing Mean?</h3>
                    <p>
                        Third-party sharing refers to when an AI provider shares user data with external organizations, partners, or service providers.
                        This may include sharing data for research, analytics, service improvements, or to meet legal obligations. Models that avoid
                        third-party sharing prioritize keeping user data within their own infrastructure.
                    </p>

                    <h3>Models That Share Data:</h3>
                    <ul>
                        <li>ChatGPT</li>
                        <li>Gemini</li>
                        <li>DeepSeek</li>
                        <li>Perplexity</li>
                    </ul>

                    <h3>Models With No Third-Party Sharing:</h3>
                    <ul>
                        <li>Microsoft Copilot</li>
                        <li>Claude</li>
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default DataTransparencyPage;
