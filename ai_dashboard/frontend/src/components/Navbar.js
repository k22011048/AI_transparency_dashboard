import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="logo">
                <Link to="/">
                    <img src="/4ba441a1-f93b-4905-ab74-782468923d00.png" alt="Logo" />
                </Link>
            </div>

            {/* Navigation Links */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to= "/model-details">Model Details</Link></li>
                <li><Link to="/data-transparency">Data Transparency</Link></li>
                <li><Link to="/trust-prediction">AI Recommendation</Link></li>
                <li><Link to="/reports-audits">Reports & Audits</Link></li>
                <li><Link to="/explainability">Explainability</Link></li>
                <li><Link to="/scenarios">What-If Scenarios</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
