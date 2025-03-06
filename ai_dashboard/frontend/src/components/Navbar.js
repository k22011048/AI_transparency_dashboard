import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional if you want to style it

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/data-transparency">Data Transparency</Link></li>
                <li><Link to="/trust-prediction">Trust Prediction</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
                <li><Link to="/reports-audits">Reports & Audits</Link></li>
                <li><Link to="/explainability">Explainability</Link></li>
                <li><Link to="/scenarios">What-If Scenarios</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
