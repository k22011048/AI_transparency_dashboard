import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ReportsAuditsPage.css";

const ReportsAuditsPage = () => {
    const [reports, setReports] = useState([]);
    const [auditLogs, setAuditLogs] = useState([]);
    const [complianceStatuses, setComplianceStatuses] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/reports-audits/reports/")
            .then((response) => setReports(response.data))
            .catch((error) => console.error("Error fetching transparency reports:", error));

        axios.get("http://127.0.0.1:8000/reports-audits/logs/")
            .then((response) => setAuditLogs(response.data))
            .catch((error) => console.error("Error fetching audit logs:", error));

        axios.get("http://127.0.0.1:8000/reports-audits/compliance/")
            .then((response) => setComplianceStatuses(response.data))
            .catch((error) => console.error("Error fetching compliance statuses:", error));
    }, []);

    return (
        <div>
            <h1>Transparency Reports and Audits</h1>
            <h2>Transparency Reports</h2>
            <ul>
                {reports.map((report) => (
                    <li key={report.id}>
                        {report.report_date}: Transparency Score {report.transparency_score}
                    </li>
                ))}
            </ul>
            <h2>Audit Logs</h2>
            <ul>
                {auditLogs.map((log) => (
                    <li key={log.id}>
                        {log.change_date}: {log.change_description}
                    </li>
                ))}
            </ul>
            <h2>Compliance Statuses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Regulation</th>
                        <th>Status</th>
                        <th>Last Checked</th>
                    </tr>
                </thead>
                <tbody>
                    {complianceStatuses.map((status) => (
                        <tr key={status.id}>
                            <td>{status.regulation}</td>
                            <td>{status.status}</td>
                            <td>{status.last_checked}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsAuditsPage;
