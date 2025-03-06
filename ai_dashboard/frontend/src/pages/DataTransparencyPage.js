import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DataTransparencyPage.css";

const DataTransparencyPage = () => {
    const [policies, setPolicies] = useState([]);
    const [dataFlows, setDataFlows] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/data-transparency/policies/")
            .then((response) => setPolicies(response.data))
            .catch((error) => console.error("Error fetching privacy policies:", error));

        axios.get("http://127.0.0.1:8000/data-transparency/data-flows/")
            .then((response) => setDataFlows(response.data))
            .catch((error) => console.error("Error fetching data flows:", error));
    }, []);

    return (
        <div>
            <h1>Data Transparency</h1>
            <h2>Privacy Policies</h2>
            <ul>
                {policies.map((policy) => (
                    <li key={policy.id}>
                        {policy.simplified_policy} (Risk Score: {policy.risk_score})
                    </li>
                ))}
            </ul>
            <h2>Data Flows</h2>
            <table>
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Process</th>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody>
                    {dataFlows.map((flow) => (
                        <tr key={flow.id}>
                            <td>{flow.source}</td>
                            <td>{flow.process}</td>
                            <td>{flow.destination}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTransparencyPage;
