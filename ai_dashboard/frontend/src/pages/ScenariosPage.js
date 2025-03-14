import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './ScenariosPage.css';

// Register the necessary components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ScenariosPage = () => {
    const [scenarios, setScenarios] = useState([]);
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [parameters, setParameters] = useState({});
    const [simulationResult, setSimulationResult] = useState(null);
    const [loading, setLoading] = useState(false);  // New loading state

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/scenarios/")
            .then((response) => {
                console.log("Scenarios fetched:", response.data); // Log the fetched scenarios
                setScenarios(response.data);
            })
            .catch((error) => console.error("Error fetching scenarios:", error));
    }, []);

    const handleSimulate = () => {
        if (!selectedScenario) {
            console.error("No scenario selected");
            return;
        }
        setLoading(true);  // Set loading state to true
        axios.post(`http://127.0.0.1:8000/api/scenarios/${selectedScenario.id}/simulate/`, { parameters })
            .then((response) => {
                console.log("Simulation result:", response.data.simulation_result); // Log the simulation result
                setSimulationResult(response.data.simulation_result);
                setLoading(false);  // Set loading state to false
            })
            .catch((error) => {
                console.error("Error simulating scenario:", error);
                setLoading(false);  // Set loading state to false even if there's an error
            });
    };

    const handleParameterChange = (param, value) => {
        setParameters(prevParams => ({ ...prevParams, [param]: value }));
        console.log("Parameters updated:", { ...parameters, [param]: value }); // Log the updated parameters
    };

    return (
        <div className="page-container">
            <div className="left-panel">
                <h1>What-If Scenarios</h1>
                <label htmlFor="scenario-select">Select Scenario:</label>
                <select id="scenario-select" onChange={(e) => setSelectedScenario(scenarios.find(scenario => scenario.id == e.target.value))}>
                    <option value="">--Select a Scenario--</option>
                    {scenarios.map((scenario) => (
                        <option key={scenario.id} value={scenario.id}>
                            {scenario.name}
                        </option>
                    ))}
                </select>
                {selectedScenario && (
                    <div>
                        <h2>Selected Scenario: {selectedScenario.name}</h2>
                        <div className="parameter-controls">
                            {Object.keys(selectedScenario.parameters).map((param) => (
                                <div key={param}>
                                    <label>{param}</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={parameters[param] || selectedScenario.parameters[param]}
                                        onChange={(e) => handleParameterChange(param, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                        <button onClick={handleSimulate}>Simulate</button>
                    </div>
                )}
            </div>
            <div className="right-panel">
                {loading ? (
                    <div className="loading">Calculating simulation results, please wait...</div>
                ) : (
                    simulationResult && (
                        <div className="results-container">
                            <p>Transparency Score: {simulationResult.transparency_score}</p>
                            <p>Privacy Score: {simulationResult.privacy_score}</p>
                            <p>Bias Mitigation Score: {simulationResult.bias_mitigation_score}</p>
                            <div className="chart-container">
                                <Radar
                                    data={{
                                        labels: ["Transparency", "Privacy", "Bias Mitigation"],
                                        datasets: [{
                                            label: 'Scores',
                                            data: [
                                                simulationResult.transparency_score,
                                                simulationResult.privacy_score,
                                                simulationResult.bias_mitigation_score
                                            ],
                                            backgroundColor: 'rgba(50, 205, 50, 0.2)',
                                            borderColor: '#32cd32'
                                        }]
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                    }}
                                />
                            </div>
                            <div className="chart-explanation">
                                <h3>Understanding the Radar Chart</h3>
                                <p>A radar chart, also known as a spider chart or web chart, is a graphical method of displaying multivariate data. Each axis represents one of the variables, and the data points are connected to form a polygon.The closer the points are to the outer edge of the chart, the higher the score for that variable. Conversely, the closer the points are to the center, the lower the score. This type of chart is useful for visualizing the strengths and weaknesses of different variables at a glance.</p>
                                <p>In this context transparency score represents the clarity and openness of the AI model, the privacy score measures the level of data protection and user privacy and the bias mitigation score assesses the efforts to reduce biases in AI outcomes.
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ScenariosPage;
