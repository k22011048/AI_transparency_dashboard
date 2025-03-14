import React, { useState, useEffect } from 'react';
import './TrustPredictionPage.css';

const TrustPredictionPage = () => {
    const [criteria, setCriteria] = useState([]);
    const [scores, setScores] = useState({});
    const [overallScore, setOverallScore] = useState(0);
    const [savedScores, setSavedScores] = useState([]);

    useEffect(() => {
        const fetchCriteria = async () => {
            try {
                const response = await fetch('/api/criteria/');
                const text = await response.text();
                console.log('Criteria response text:', text);
                try {
                    const data = JSON.parse(text);
                    setCriteria(data);
                    const initialScores = data.reduce((acc, criterion) => {
                        acc[criterion.name] = 0;
                        return acc;
                    }, {});
                    setScores(initialScores);
                } catch (error) {
                    console.error('Error parsing criteria JSON:', error);
                    console.log('Criteria response text:', text);
                }
            } catch (error) {
                console.error('Error fetching criteria:', error);
            }
        };

        const fetchSavedScores = async () => {
            try {
                const response = await fetch('/api/saved-scores/');
                const text = await response.text();
                console.log('Saved scores response text:', text);
                try {
                    const data = JSON.parse(text);
                    setSavedScores(data);
                } catch (error) {
                    console.error('Error parsing saved scores JSON:', error);
                    console.log('Saved scores response text:', text);
                }
            } catch (error) {
                console.error('Error fetching saved scores:', error);
            }
        };

        fetchCriteria();
        fetchSavedScores();
    }, []);

    const handleScoreChange = (criterionName, value) => {
        setScores({
            ...scores,
            [criterionName]: value,
        });
    };

    const calculateOverallScore = () => {
        const totalScore = Object.values(scores).reduce((acc, score) => acc + parseInt(score, 10), 0);
        setOverallScore((totalScore / criteria.length).toFixed(1));
    };

    useEffect(() => {
        calculateOverallScore();
    }, [scores]);

    const saveUserScores = async () => {
        const responses = await Promise.all(
            Object.keys(scores).map(criterionName => {
                const criterion = criteria.find(c => c.name === criterionName);
                return fetch('/api/user-scores/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        criterion: criterion.id,
                        score: scores[criterionName],
                    }),
                });
            })
        );
        if (responses.every(res => res.ok)) {
            alert('Scores saved successfully!');
            const fetchSavedScores = async () => {
                const response = await fetch('/api/saved-scores/');
                const text = await response.text();
                console.log('Updated saved scores response text:', text);
                try {
                    const data = JSON.parse(text);
                    setSavedScores(data);
                } catch (error) {
                    console.error('Error parsing updated saved scores JSON:', error);
                    console.log('Updated saved scores response text:', text);
                }
            };
            fetchSavedScores();
        } else {
            alert('There was an error saving your scores.');
        }
    };

    return (
        <div className="trust-prediction-page">
            <h1 className="heading">AI Trust Prediction Page</h1>
            <div className="criteria-container">
                {criteria.map(criterion => (
                    <div key={criterion.id} className="criterion-card">
                        <h2 className="criterion-name">{criterion.name}</h2>
                        <p className="criterion-description">{criterion.description}</p>
                        <input
                            type="number"
                            min="-100"
                            max="100"
                            value={scores[criterion.name]}
                            onChange={(e) => handleScoreChange(criterion.name, e.target.value)}
                            className="score-input"
                        />
                    </div>
                ))}
            </div>
            <div className="overall-score-container">
                <h2 className="overall-score-heading">Overall Trust Score</h2>
                <div className="overall-score">
                    {overallScore}
                </div>
            </div>
            <button onClick={saveUserScores} className="save-button">Save Scores</button>
            <div className="saved-scores-container">
                <h2 className="saved-scores-heading">Saved Scores</h2>
                <ul className="saved-scores-list">
                    {savedScores.map(score => (
                        <li key={score['criterion__name']} className="saved-score-item">
                            <strong>{score['criterion__name']}:</strong> {score['average_score'].toFixed(1)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TrustPredictionPage;
