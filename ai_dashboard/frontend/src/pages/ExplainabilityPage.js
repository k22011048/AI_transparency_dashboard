import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExplainabilityPage.css";

const ExplainabilityPage = () => {
    const [decisionProcesses, setDecisionProcesses] = useState([]);
    const [biasMetrics, setBiasMetrics] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/explainability/decision-processes/")
            .then((response) => setDecisionProcesses(response.data))
            .catch((error) => console.error("Error fetching decision processes:", error));

        axios.get("http://127.0.0.1:8000/explainability/bias-metrics/")
            .then((response) => setBiasMetrics(response.data))
            .catch((error) => console.error("Error fetching bias metrics:", error));
    }, []);

    return (
        <div>
            <h1>Explainability Insights</h1>
            <h2>Decision Processes</h2>
            <ul>
                {decisionProcesses.map((process) => (
                    <li key={process.id}>{process.step_description}</li>
                ))}
            </ul>
            <h2>Bias Metrics</h2>
            <table>
                <thead>
                    <tr>
                        <th>Demographic</th>
                        <th>Bias Score</th>
                    </tr>
                </thead>
                <tbody>
                    {biasMetrics.map((metric) => (
                        <tr key={metric.id}>
                            <td>{metric.demographic}</td>
                            <td>{metric.bias_score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExplainabilityPage;
