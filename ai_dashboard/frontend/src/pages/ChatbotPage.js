import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./ChatbotPage.css";

const ChatbotPage = () => {
    const [areas, setAreas] = useState([]);
    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [response, setResponse] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isOpen, setIsOpen] = useState(false); // State for pop-up visibility

    // Fetch areas and their questions
    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const res = await axios.get("http://localhost:8000/chatbot/areas/");
                setAreas(res.data);
            } catch (error) {
                console.error("Error fetching areas:", error);
            }
        };
        fetchAreas();
    }, []);

    const handleAreaSelect = (area) => {
        setSelectedArea(area);
        setSelectedQuestion(null);
    };

    const handleQuestionSelect = async (question) => {
        setSelectedQuestion(question);
        try {
            const res = await axios.post("http://localhost:8000/chatbot/query/", {
                query: question.question_text,
            });
            setResponse(res.data.answer); // Display the backend answer in the UI
        } catch (error) {
            console.error("Error interacting with chatbot:", error);
            setResponse("Sorry, something went wrong. Please try again later."); // Handle errors gracefully
        }
    };

    const handleFeedbackSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:8000/chatbot/feedback/", { feedback });
            if (res.data.status === "success") {
                alert("Thank you for your feedback!");
                setFeedback(""); // Clear feedback
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
    };

    return (
        <div className="chatbot-container">
            <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faComments} />
            </button>

            {isOpen && (
                <div className="chat-widget">
                    <div className="chat-window">
                        <div className="chat-header">
                            Clarity AI
                            <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
                        </div>
                        <div className="chat-body">
                            {!selectedArea ? (
                                <div>
                                    <h3>Select a Section</h3>
                                    {areas.map((area) => (
                                        <button
                                            key={area.id}
                                            onClick={() => handleAreaSelect(area)}
                                            className="area-button"
                                        >
                                            {area.name}
                                        </button>
                                    ))}
                                </div>
                            ) : !selectedQuestion ? (
                                <div>
                                    <h3>Select a Question</h3>
                                    {selectedArea.questions.map((question) => (
                                        <button
                                            key={question.id}
                                            onClick={() => handleQuestionSelect(question)}
                                            className="question-button"
                                        >
                                            {question.question_text}
                                        </button>
                                    ))}
                                    <button onClick={() => setSelectedArea(null)} className="back-button">
                                        Back to Sections
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <h3>Question</h3>
                                    <p>{selectedQuestion.question_text}</p>
                                    <h3>Answer</h3>
                                    <p>{response}</p>
                                    <div className="feedback-section">
                                        <textarea
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            placeholder="What do you think about the response?"
                                            rows="4"
                                        />
                                        <button onClick={handleFeedbackSubmit} disabled={!feedback.trim()}>
                                            Submit Feedback
                                        </button>
                                    </div>
                                    <button onClick={() => setSelectedQuestion(null)} className="back-button">
                                        Back to Questions
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotPage;
