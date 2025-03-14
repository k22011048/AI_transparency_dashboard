import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faComments } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import "./ChatbotPage.css";

const ChatbotPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [recommendations, setRecommendations] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post("/chatbot/query/", { query });
            setResponse(res.data.answer);
            const recommendationRes = await axios.post("/chatbot/recommend/", { query });
            setRecommendations(recommendationRes.data.recommendation);
        } catch (error) {
            console.error("Error interacting with chatbot:", error);
        }
    };

    return (
        <div className="chat-widget">
            <button className="chat-button" onClick={toggleChat}>
                <FontAwesomeIcon icon={faComments} size="lg" /> {/* Use FontAwesome icon */}
            </button>
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">Clarity AI</div>
                    <div className="chat-body">
                        {response && (
                            <div className="response-box">
                                <h3>Response:</h3>
                                <p>{response}</p>
                            </div>
                        )}
                        {recommendations && (
                            <div className="recommendation-box">
                                <h3>Recommendation:</h3>
                                <p>{recommendations}</p>
                            </div>
                        )}
                        <textarea
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Ask a question about AI models or privacy practices..."
                            rows="4"
                            cols="50"
                        />
                        <button onClick={handleSubmit}>Ask</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotPage;
