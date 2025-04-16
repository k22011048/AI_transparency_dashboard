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

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const API_BASE_URL = process.env.REACT_APP_API_URL;

const AXIS_LABELS = {
  privacy_level: "Privacy",
  security_level: "Security",
  transparency_level: "Transparency",
  trust_level: "Trust",
  ethics_level: "Ethics",
  bias_level: "Bias"
};

const ScenariosPage = () => {
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [parameters, setParameters] = useState({});
  const [selectedAxes, setSelectedAxes] = useState([]);
  const [simulationResult, setSimulationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/scenarios/`)
      .then((response) => setScenarios(response.data))
      .catch((error) => console.error("Error fetching scenarios:", error));
  }, []);

  useEffect(() => {
    if (selectedScenario) {
      setParameters({ ...selectedScenario.parameters });
      setSelectedAxes(selectedScenario.selected_axes);
    }
  }, [selectedScenario]);

  const handleSimulate = () => {
    if (!selectedScenario) return;

    setLoading(true);
    axios.post(`${API_BASE_URL}/api/scenarios/${selectedScenario.id}/simulate/`, { parameters })
      .then((response) => {
        setSimulationResult(response.data.simulation_result);
        setSelectedAxes(response.data.selected_axes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error simulating scenario:", error);
        setLoading(false);
      });
  };

  const handleParameterChange = (param, value) => {
    setParameters(prevParams => ({ ...prevParams, [param]: parseInt(value, 10) }));
  };

  return (
    <div className="page-container">
      <div className="left-panel">
        <h1>What-If Scenarios</h1>
        <label htmlFor="scenario-select">Select Scenario:</label>
        <select
          id="scenario-select"
          onChange={(e) =>
            setSelectedScenario(scenarios.find(scenario => scenario.id == e.target.value))
          }
        >
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
              {Object.keys(parameters).map((param) => (
                <div key={param} className="parameter-item">
                  <label>{AXIS_LABELS[param]}</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={parameters[param]}
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
              <p>Overall Score: {simulationResult.overall_score}</p>

              <div className="chart-container">
                <Radar
                  data={{
                    labels: selectedAxes.map(axis => AXIS_LABELS[axis]),
                    datasets: [{
                      label: 'Scores',
                      data: selectedAxes.map(axis => simulationResult[axis]),
                      backgroundColor: 'rgba(50, 205, 50, 0.2)',
                      borderColor: '#32cd32'
                    }]
                  }}
                  options={{ maintainAspectRatio: false }}
                />
              </div>

              <div className="chart-explanation">
                <h3>Understanding the Radar Chart</h3>
                <p>
                  A radar chart is used to visualize performance across multiple categories.
                  The closer the line is to the outer edge, the higher the score in that category.
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
