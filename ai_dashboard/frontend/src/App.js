import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar
import HomePage from "./pages/HomePage";
import DataTransparencyPage from "./pages/DataTransparencyPage";
import TrustPredictionPage from "./pages/TrustPredictionPage";
import ChatbotPage from "./pages/ChatbotPage";
import ReportsAuditsPage from "./pages/ReportsAuditsPage";
import ExplainabilityPage from "./pages/ExplainabilityPage";
import ScenariosPage from "./pages/ScenariosPage";

function App() {
    return (
        <Router>
            <Navbar /> {/* Add the Navbar here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/data-transparency" element={<DataTransparencyPage />} />
                <Route path="/trust-prediction" element={<TrustPredictionPage />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
                <Route path="/reports-audits" element={<ReportsAuditsPage />} />
                <Route path="/explainability" element={<ExplainabilityPage />} />
                <Route path="/scenarios" element={<ScenariosPage />} />
            </Routes>
        </Router>
    );
}

export default App;
