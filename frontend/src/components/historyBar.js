import React,{useState,useEffect} from 'react';
import './historyBar.css';
import axios from 'axios';

export default function HistoryBar({ history , onNewChat}) {
    const handleChatClick = () => {
        onNewChat();
    };

    
   
    return (
        <div className="history-bar">
            <div className="container">
                <div className="history-heading">History</div>
                <button className="new-chat-button" onClick={handleChatClick}>New Chat</button>
            </div>
            <div className="question-answer-group">
                <div>Date</div>
                {history.map((data, index) => (
                    <div key={index} className="question-answer">
                        <div className="history-question">{data.question}</div>
                        <div className="history-answer">{data.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
