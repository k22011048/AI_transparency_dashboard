import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ScenariosPage.css";

const ScenariosPage = () => {
    const [scenarios, setScenarios] = useState([]);
    const [simulationResult, setSimulationResult] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/scenarios/")
            .then((response) => setScenarios(response.data))
            .catch((error) => console.error("Error fetching scenarios:", error));
    }, []);

    const handleSimulate = (parameters) => {
        axios.post("http://127.0.0.1:8000/scenarios/simulate/", { parameters })
            .then((response) => setSimulationResult(response.data.simulation_result))
            .catch((error) => console.error("Error simulating scenario:", error));
    };

    return (
        <div>
            <h1>What-If Scenarios</h1>
            <h2>Available Scenarios</h2>
            <ul>
                {scenarios.map((scenario) => (
                    <li key={scenario.id}>
                        {scenario.name} - {scenario.description}
                        <button onClick={() => handleSimulate(scenario.parameters)}>Simulate</button>
                    </li>
                ))}
            </ul>
            {simulationResult && (
                <div>
                    <h2>Simulation Result</h2>
                    <p>Transparency Score: {simulationResult.transparency_score}</p>
                    <p>Privacy Score: {simulationResult.privacy_score}</p>
                    <p>Bias Mitigation Score: {simulationResult.bias_mitigation_score}</p>
                </div>
            )}
        </div>
    );
};

export default ScenariosPage;
