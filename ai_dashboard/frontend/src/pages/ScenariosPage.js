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

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ScenariosPage = () => {
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [parameters, setParameters] = useState({});
  const [selectedAxes, setSelectedAxes] = useState(["transparency_level", "privacy_level", "security_level"]);
  const [simulationResult, setSimulationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Default parameter structure
  const DEFAULT_PARAMETERS = {
    transparency_level: 50,
    privacy_level: 50,
    security_level: 50,
    bias_mitigation_level: 50,
    fairness_level: 50,
    user_control_level: 50,
    auditability_level: 50
  };

  // Fetch scenarios from the backend
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/scenarios/")
      .then((response) => {
        setScenarios(response.data);
      })
      .catch((error) => console.error("Error fetching scenarios:", error));
  }, []);

  // Update parameters and selected axes when a scenario is selected
  useEffect(() => {
    if (selectedScenario) {
      setParameters({ ...DEFAULT_PARAMETERS, ...selectedScenario.parameters });
      setSelectedAxes(selectedScenario.selected_axes || ["transparency_level", "privacy_level", "security_level"]);
    }
  }, [selectedScenario]);

  // Handle simulation request
  const handleSimulate = () => {
    if (!selectedScenario) {
      console.error("No scenario selected");
      return;
    }
    setLoading(true);
    axios.post(`http://127.0.0.1:8000/api/scenarios/${selectedScenario.id}/simulate/`, { parameters })
      .then((response) => {
        setSimulationResult(response.data.simulation_result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error simulating scenario:", error);
        setLoading(false);
      });
  };

  // Handle slider adjustments for parameters
  const handleParameterChange = (param, value) => {
    setParameters(prevParams => ({ ...prevParams, [param]: parseInt(value, 10) }));
  };

  // Handle axis selection for the radar chart
  const handleAxisChange = (index, newAxis) => {
    setSelectedAxes(prevAxes => {
      const newAxes = [...prevAxes];
      newAxes[index] = newAxis;
      return newAxes;
    });
  };

  return (
    <div className="page-container">
      <div className="left-panel">
        <h1>What-If Scenarios</h1>
        <label htmlFor="scenario-select">Select Scenario:</label>
        <select
          id="scenario-select"
          onChange={(e) => setSelectedScenario(scenarios.find(scenario => scenario.id == e.target.value))}
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

            {/* Parameter Sliders */}
            <div className="parameter-controls">
              {Object.keys(parameters).map((param) => (
                <div key={param}>
                  <label>{param.replace('_', ' ')}</label>
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

            {/* Axis Selection */}
            <h3>Select Radar Chart Axes</h3>
            {selectedAxes.map((axis, index) => (
              <div key={index}>
                <label>Axis {index + 1}:</label>
                <select value={axis} onChange={(e) => handleAxisChange(index, e.target.value)}>
                  {Object.keys(parameters).map((param) => (
                    <option key={param} value={param}>
                      {param.replace('_', ' ')}
                    </option>
                  ))}
                </select>
              </div>
            ))}

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
                    labels: selectedAxes.map(axis => axis.replace('_', ' ')),
                    datasets: [{
                      label: 'Scores',
                      data: selectedAxes.map(axis => simulationResult[axis]),
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
                <p>
                  A radar chart, also known as a spider chart or web chart, is a graphical method
                  of displaying multivariate data. Each axis represents one of the variables, and
                  the data points are connected to form a polygon. The closer the points are to
                  the outer edge, the higher the score for that variable.
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
