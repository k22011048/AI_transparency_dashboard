import React, { useEffect, useState } from 'react';
import Plotly from 'plotly.js-dist';
import './ReportsAuditsPage.css';

const ReportsAuditsPage = () => {
    const [setTransparencyScores] = useState([]);
    const [auditLogs, setAuditLogs] = useState([]);

    // Static data for regulatory compliance links and explanations
    const regulatoryLinks = [
        {
            id: 1,
            name: "Information Commissioner's Office (ICO)",
            url: "https://ico.org.uk/",
            description: "The UK's independent regulator for data protection and privacy. The ICO enforces the UK GDPR and the Data Protection Act 2018, ensuring organisations handle personal data lawfully, fairly, and transparently. It also provides guidance on AI governance, privacy impact assessments, and compliance with emerging AI and data protection laws."
        },
        {
            id: 2,
            name: "European Data Protection Board (EDPB)",
            url: "https://edpb.europa.eu/",
            description: "An independent EU body that ensures the consistent application of GDPR across all EU member states. The EDPB issues guidelines, recommendations, and best practices for data protection authorities, businesses, and policymakers."
        },
        {
            id: 3,
            name: "Department for Science, Innovation and Technology (DSIT)",
            url: "https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology",
            description: "A UK government department responsible for shaping the country’s AI policy and regulatory framework, focusing on trust, transparency, and accountability."
        },
        {
            id: 4,
            name: "Financial Conduct Authority (FCA)",
            url: "https://www.fca.org.uk/",
            description: "The UK's financial regulatory body overseeing financial markets and services. The FCA ensures compliance of AI-driven financial products with financial regulations and consumer protection laws."
        },
        {
            id: 5,
            name: "Competition and Markets Authority (CMA)",
            url: "https://www.gov.uk/government/organisations/competition-and-markets-authority",
            description: "The UK's competition regulator, actively examining the impact of AI technologies on competition and transparency in consumer-facing applications."
        },
        {
            id: 6,
            name: "National Institute of Standards and Technology (NIST)",
            url: "https://www.nist.gov/",
            description: "A U.S. agency that develops AI and cybersecurity standards influencing regulatory frameworks worldwide, including the UK and EU."
        }
    ];

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
