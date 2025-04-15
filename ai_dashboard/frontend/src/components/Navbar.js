import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="logo">
                <Link to="/" onClick={handleLinkClick}>
                    <img src="/4ba441a1-f93b-4905-ab74-782468923d00.png" alt="Logo" />
                </Link>
            </div>

            {/* Hamburger Icon */}
            <div
                className={menuOpen ? "hamburger open" : "hamburger"}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navigation Links */}
            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/model-details" onClick={handleLinkClick}>Model Details</Link></li>
                <li><Link to="/data-transparency" onClick={handleLinkClick}>Data Transparency</Link></li>
                <li><Link to="/ai-recommendation" onClick={handleLinkClick}>AI Recommendation</Link></li>
                <li><Link to="/reports-audits" onClick={handleLinkClick}>Reports & Audits</Link></li>
                <li><Link to="/explainability" onClick={handleLinkClick}>Explainability</Link></li>
                <li><Link to="/scenarios" onClick={handleLinkClick}>What-If Scenarios</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
