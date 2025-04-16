import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plotly from 'plotly.js-dist';
import './ReportsAuditsPage.css';

const ReportsAuditsPage = () => {
    const BASE_URL = process.env.REACT_APP_API_URL;

    const [transparencyScores, setTransparencyScores] = useState([]);
    const [auditLogs, setAuditLogs] = useState([]);
    const [milestones, setMilestones] = useState([]);
    const [compliance, setCompliance] = useState([]);
    const [certifications, setCertifications] = useState([]);

    const regulatoryLinks = [
        {
            id: 1,
            name: "Information Commissioner's Office (ICO)",
            url: "https://ico.org.uk/",
            description: "The UK's independent regulator for data protection and privacy. The ICO enforces the UK GDPR and the Data Protection Act 2018."
        },
        {
            id: 2,
            name: "European Data Protection Board (EDPB)",
            url: "https://edpb.europa.eu/",
            description: "Ensures consistent application of GDPR across all EU member states."
        },
        {
            id: 3,
            name: "Department for Science, Innovation and Technology (DSIT)",
            url: "https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology",
            description: "Responsible for shaping the UK’s AI policy and regulatory framework."
        },
        {
            id: 4,
            name: "Financial Conduct Authority (FCA)",
            url: "https://www.fca.org.uk/",
            description: "Oversees financial services including AI-driven products for regulatory compliance."
        },
        {
            id: 5,
            name: "Competition and Markets Authority (CMA)",
            url: "https://www.gov.uk/government/organisations/competition-and-markets-authority",
            description: "Ensures fair competition and transparency in AI consumer applications."
        },
        {
            id: 6,
            name: "National Institute of Standards and Technology (NIST)",
            url: "https://www.nist.gov/",
            description: "Develops global AI and cybersecurity standards."
        }
    ];

    useEffect(() => {
        axios.get(`${BASE_URL}/api/reports-audits/transparency-reports/`).then(res => {
            setTransparencyScores(res.data);
            const months = res.data.map(r => r.month);
            const scores = res.data.map(r => r.score);

            const trace = {
                x: months,
                y: scores,
                type: 'scatter',
                mode: 'lines+markers',
                line: { color: '#337880' },
                name: 'Transparency Score'
            };

            const layout = {
                title: 'Transparency Score Evolution',
                xaxis: { title: 'Month' },
                yaxis: { title: 'Score' }
            };

            Plotly.newPlot('transparencyChart', [trace], layout);
        }).catch(err => console.error(err));

        axios.get(`${BASE_URL}/api/reports-audits/audit-logs/`).then(res => setAuditLogs(res.data)).catch(err => console.error(err));
        axios.get(`${BASE_URL}/api/reports-audits/milestones/`).then(res => setMilestones(res.data)).catch(err => console.error(err));
        axios.get(`${BASE_URL}/api/reports-audits/compliance-statuses/`).then(res => setCompliance(res.data)).catch(err => console.error(err));
        axios.get(`${BASE_URL}/api/reports-audits/certifications/`).then(res => setCertifications(res.data)).catch(err => console.error(err));
    }, []);

    return (
        <div className="reports-audits-page">
            <h1 className="heading">AI Transparency Reports & Audits Page</h1>

            <section className="section">
                <h2>Transparency Reports</h2>
                <div id="transparencyChart" className="chart"></div>
            </section>

            <section className="section">
                <h2>Compliance Dashboard</h2>
                <table className="compliance-table">
                    <thead>
                        <tr>
                            <th>Regulation</th>
                            <th>Status</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compliance.map(item => (
                            <tr key={item.id}>
                                <td>{item.regulation}</td>
                                <td>{item.status}</td>
                                <td>{item.last_updated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="section">
                <h2>Milestone Timeline</h2>
                <ul className="milestone-list">
                    {milestones.map(milestone => (
                        <li key={milestone.id}>
                            <strong>{milestone.date} - {milestone.event_type}</strong>: {milestone.title}
                            <p>{milestone.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section">
                <h2>Audit Logs</h2>
                <ul className="audit-log-list">
                    {auditLogs.map(log => (
                        <li key={log.id}>
                            <strong>{log.timestamp}</strong>: {log.event} - {log.details}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section">
                <h2>Certifications & Badges</h2>
                <ul className="cert-list">
                    {certifications.map(cert => (
                        <li key={cert.id}>
                            <strong>{cert.name}</strong>: {cert.status}
                            {cert.issued_date && (
                                <p>Issued: {cert.issued_date} | Expires: {cert.expiry_date}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section">
                <h2>Regulatory Compliance Links</h2>
                <ul className="resource-list">
                    {regulatoryLinks.map(link => (
                        <li key={link.id} className="resource-item">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>: {link.description}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ReportsAuditsPage;
