import React, { useEffect, useState } from 'react';
import Plotly from 'plotly.js-dist';
import './ReportsAuditsPage.css';

const ReportsAuditsPage = () => {
    const [transparencyScores, setTransparencyScores] = useState([]);
    const [regulatoryLinks, setRegulatoryLinks] = useState([]);
    const [auditLogs, setAuditLogs] = useState([]);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await fetch('/api/transparency-reports/');
                const text = await response.text();
                try {
                    const data = JSON.parse(text);
                    setTransparencyScores(data);

                    const chartData = data.map(score => ({
                        x: [score.month],
                        y: [score.score],
                        type: 'bar',
                        name: 'Transparency Score'
                    }));

                    const layout = {
                        title: 'Transparency Reports',
                        xaxis: { title: 'Month' },
                        yaxis: { title: 'Score' }
                    };

                    Plotly.newPlot('transparencyChart', chartData, layout);
                } catch (error) {
                    console.error('Error parsing transparency report JSON:', error);
                    console.log('Response text:', text);
                }
            } catch (error) {
                console.error('Error fetching transparency reports:', error);
            }
        };

        const fetchLinks = async () => {
            try {
                const response = await fetch('/api/regulatory-compliance-links/');
                const text = await response.text();
                try {
                    const data = JSON.parse(text);
                    setRegulatoryLinks(data);
                } catch (error) {
                    console.error('Error parsing regulatory links JSON:', error);
                    console.log('Response text:', text);
                }
            } catch (error) {
                console.error('Error fetching regulatory compliance links:', error);
            }
        };

        const fetchLogs = async () => {
            try {
                const response = await fetch('/api/audit-logs/');
                const text = await response.text();
                try {
                    const data = JSON.parse(text);
                    setAuditLogs(data);
                } catch (error) {
                    console.error('Error parsing audit logs JSON:', error);
                    console.log('Response text:', text);
                }
            } catch (error) {
                console.error('Error fetching audit logs:', error);
            }
        };

        fetchScores();
        fetchLinks();
        fetchLogs();
    }, []);

    return (
        <div className="reports-audits-page">
            <h1 className="heading">AI Transparency Reports & Audits Page</h1>
            <div className="section">
                <h2 className="heading">Transparency Reports</h2>
                <div id="transparencyChart" className="chart"></div>
            </div>
            <div className="section">
                <h2 className="heading">Regulatory Compliance Links</h2>
                <ul className="resource-list">
                    {regulatoryLinks.map(link => (
                        <li key={link.id} className="resource-item">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>: {link.description}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="section">
                <h2 className="heading">Audit Logs</h2>
                <ul className="audit-log-list">
                    {auditLogs.map(log => (
                        <li key={log.id} className="audit-log-item">
                            <strong>{log.timestamp}:</strong> {log.event} - {log.details}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ReportsAuditsPage;
