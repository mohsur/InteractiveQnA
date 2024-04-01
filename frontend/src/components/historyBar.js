import React,{useState,useEffect} from 'react';
import './historyBar.css';
import axios from 'axios';

export default function HistoryBar() {
    const [dummyData, setDummyData] = useState([]); 

    useEffect(() => {
        
        axios.get('http://localhost:4000/dummy-data') 
            .then(response => {
                setDummyData(response.data); 
            })
            .catch(error => {
                console.error('Error fetching dummy data:', error);
            });
    }, []); 
    const handleChatClick=()=>{
     
    }
    
   
    return (
        <div className="history-bar">
            <div className="container">
                <div className="history-heading">History</div>
                <button className="new-chat-button" onClick={handleChatClick}>New Chat</button>
            </div>
            <div className="question-answer-group">
                <div>Date</div>
                {dummyData.map((data, index) => (
                    <div key={index} className="question-answer">
                        <div className="history-question">{data.question}</div>
                        <div className="history-answer">{data.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
