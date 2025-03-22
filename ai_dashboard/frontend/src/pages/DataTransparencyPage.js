import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import './DataTransparencyPage.css';

const DataTransparencyPage = () => {
    const [policySummaries, setPolicySummaries] = useState([]);
    const [comparisonData, setComparisonData] = useState([]);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchPolicySummaries = async () => {
            try {
                const response = await fetch('/api/data-transparency/policy-summaries/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPolicySummaries(data);
            } catch (error) {
                console.error('Error fetching policy summaries:', error);
            }
        };

        const fetchComparisonData = async () => {
            try {
                const response = await fetch('/api/data-transparency/comparison-data/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setComparisonData(data);
            } catch (error) {
                console.error('Error fetching comparison data:', error);
            }
        };

        const fetchChartData = async () => {
            try {
                const response = await fetch('/api/data-transparency/chart-data/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if (data.length > 0) {
                    setChartData({
                        labels: data[0].labels,
                        datasets: [
                            {
                                label: data[0].modelName,
                                data: data[0].values,
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                            },
                        ],
                    });
                } else {
                    console.error("Chart data is empty!");
                }
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchPolicySummaries();
        fetchComparisonData();
        fetchChartData();
    }, []);

    return (
        <div className="data-transparency-page">
            <h1 className="heading">AI Model Data Transparency Page</h1>

            {/* Policy Summaries Section */}
            <section className="policy-summary-section">
                <h2>AI Policy Summarization</h2>
                {policySummaries.length > 0 ? (
                    policySummaries.map((summary) => (
                        <div key={summary.id} className="policy-summary-card">
                            <h3>{summary.modelName}</h3>
                            <p>{summary.summary}</p>
                        </div>
                    ))
                ) : (
                    <p>No policy summaries available.</p>
                )}
            </section>

            {/* Comparison Table Section */}
            <section className="comparison-table-section">
                <h2>Comparison Table</h2>
                {comparisonData.length > 0 ? (
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
                            {comparisonData.map((model) => (
                                <tr key={model.id}>
                                    <td>{model.modelName}</td>
                                    <td>{model.dataRetentionPolicies}</td>
                                    <td>{model.thirdPartySharing}</td>
                                    <td>{model.regulatoryCompliance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No comparison data available.</p>
                )}
            </section>

            {/* Privacy Impact Chart Section */}
            <section className="privacy-impact-section">
                <h2>Visual Privacy Impact Assessments</h2>
                {chartData ? (
                    <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        }}
                    />
                ) : (
                    <p>No chart data available.</p>
                )}
            </section>
        </div>
    );
};

export default DataTransparencyPage;
