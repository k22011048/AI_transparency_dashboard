import React, { useState } from "react";
import axios from "axios";
import "./TrustPredictionPage.css";

const TrustPredictionPage = () => {
    const [parameters, setParameters] = useState({ transparency: 5, privacy: 5, bias_mitigation: 5 });
    const [result, setResult] = useState(null);

    const handleInputChange = (event) => {
        setParameters({ ...parameters, [event.target.name]: Number(event.target.value) });
    };

    const handleSubmit = () => {
        axios.post("http://127.0.0.1:8000/trust-prediction/simulate/", { parameters })
            .then((response) => setResult(response.data.simulation_result))
            .catch((error) => console.error("Error predicting trust scores:", error));
    };

    return (
        <div>
            <h1>Trust Prediction</h1>
            <label>
                Transparency: <input type="range" name="transparency" min="1" max="10" value={parameters.transparency} onChange={handleInputChange} />
            </label>
            <label>
                Privacy: <input type="range" name="privacy" min="1" max="10" value={parameters.privacy} onChange={handleInputChange} />
            </label>
            <label>
                Bias Mitigation: <input type="range" name="bias_mitigation" min="1" max="10" value={parameters.bias_mitigation} onChange={handleInputChange} />
            </label>
            <button onClick={handleSubmit}>Predict</button>
            {result && (
                <div>
                    <h2>Prediction Results</h2>
                    <p>Transparency Score: {result.transparency_score}</p>
                    <p>Privacy Score: {result.privacy_score}</p>
                    <p>Bias Mitigation Score: {result.bias_mitigation_score}</p>
                </div>
            )}
        </div>
    );
};

export default TrustPredictionPage;
