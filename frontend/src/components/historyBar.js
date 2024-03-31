import React from 'react';
import './historyBar.css';

export default function HistoryBar() {
    
    const dummyData = [
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
    ];

    return (
        <div className="history-bar">
            <div className="container">
            <div className="history-heading">History</div>
            <button className="new-chat-button">New Chat</button>
            </div>
            
            <div className="question-answer-group">
                {dummyData.map((data, index) => (
                    <div key={index} className="question-answer">
                        <div className="question">{data.question}</div>
                        <div className="answer">{data.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
