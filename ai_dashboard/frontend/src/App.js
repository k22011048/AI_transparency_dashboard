import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar
import HomePage from "./pages/HomePage";
import DataTransparencyPage from "./pages/DataTransparencyPage";
import AIRecommendationPage from "./pages/AIRecommendationPage";
import ChatbotPage from "./pages/ChatbotPage";
import ReportsAuditsPage from "./pages/ReportsAuditsPage";
import ExplainabilityPage from "./pages/ExplainabilityPage";
import ScenariosPage from "./pages/ScenariosPage";
import ModelDetailsPage from "./pages/ModelDetailsPage";

function App() {
    return (
        <Router>
            <Navbar /> {/* Add the Navbar here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/model-details" element={<ModelDetailsPage />} />
                <Route path="/data-transparency" element={<DataTransparencyPage />} />
                <Route path="/ai-recommendation" element={<AIRecommendationPage />} />
                <Route path="/reports-audits" element={<ReportsAuditsPage />} />
                <Route path="/explainability" element={<ExplainabilityPage />} />
                <Route path="/scenarios" element={<ScenariosPage />} />
            </Routes>
            <ChatbotPage /> {/* Add the ChatbotPage here as a widget */}
        </Router>
    );
}

export default App;
