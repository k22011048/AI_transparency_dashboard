import React, { useState } from "react";
import axios from "axios";
import "./ChatbotPage.css";

const ChatbotPage = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = () => {
        axios.post("http://127.0.0.1:8000/chatbot/query/", { query })
            .then((res) => setResponse(res.data.answer))
            .catch((error) => console.error("Error interacting with chatbot:", error));
    };

    return (
        <div>
            <h1>AI Chatbot</h1>
            <textarea
                value={query}
                onChange={handleInputChange}
                placeholder="Ask a question about AI models..."
                rows="4"
                cols="50"
            />
            <br />
            <button onClick={handleSubmit}>Ask</button>
            {response && (
                <div>
                    <h3>Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default ChatbotPage;
