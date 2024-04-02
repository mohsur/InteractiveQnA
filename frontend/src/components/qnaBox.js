import React ,{useState,useEffect} from 'react';
import "./qnaBox.css";
import MySelect from './select';
import axios from 'axios';
import { jsPDF } from 'jspdf';


export default function QnABox({history, onSearch ,newChatTrigger,options}) {
    
    const [userInput, setUserInput] = useState('');
    const [fetchedAnswers, setFetchedAnswers] = useState([]);

    const handleCopy = (response) => {
        navigator.clipboard.writeText(response)
            .then(() => {
                console.log('Response copied to clipboard:', response);
               
            })
            .catch((error) => {
                console.error('Error copying response to clipboard:', error);
                
            });
    };
    
    const handleShareClick = () => {
        
    };

    const handleExportClick = () => {
        const doc = new jsPDF();
        let y = 10;
        history.forEach(({ question, answer }) => {
            doc.text(question, 10, y);
            doc.text(answer, 10, y + 10);
            y += 20;
        });
        doc.save('history.pdf');
    };
    
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };
    
    const handleThumbsUp = (answer) => {
        axios.post('http://localhost:4000/thumbs-up', { answer })
        .then(response => {
            console.log('Thumbs-up feedback received');
        })
        .catch(error => {
            console.error('Error handling thumbs-up feedback:', error);
        });
    };

    const handleThumbsDown = (answer) => {
        axios.post('http://localhost:4000/thumbs-down', { answer })
            .then(response => {
                console.log('Thumbs-down feedback received');
            })
            .catch(error => {
                console.error('Error handling thumbs-down feedback:', error);
            });
    };

    const handleAskClick = () => {
        axios.post('http://localhost:4000/get-answer', { question: userInput })
        .then(response => {
            setFetchedAnswers(prevAnswers => [...prevAnswers, { question: userInput, answer: response.data.answer }]);
            onSearch({ question: userInput, answer: response.data.answer });
            setUserInput('');
        })
        .catch(error => {
            console.error('Error fetching answer:', error);
        });

    };
   
    useEffect(() => {
        if (newChatTrigger) {
          setFetchedAnswers([]);
        }
    }, [newChatTrigger]);
    
      return (
        <div className="qna-box">
            <div className="box-header">
            <button className='box-header-item' onClick={handleShareClick}>Share</button>
            <button className='box-header-item' onClick={handleExportClick}>Export</button>
            </div>
            {fetchedAnswers.map((data, index) => (
            <div key={index}>
                <div className="question-container">
                    <div className="question">{data.question}</div>
                </div>
                <div className="response-container">
                    <div className="response">{data.answer}</div>
                    
                </div>
                <div className="feedback">
                            <button onClick={() => handleThumbsUp(data.answer)} title="You like the response" >&#128077;</button>
                            <button onClick={() => handleThumbsDown(data.answer)}title="You donot like the response">&#128078;</button>
                            <button onClick={() => handleCopy(data.answer)} title="Copy to clipboard">&#128203;</button>
                </div>
            </div>
            ))}
            <div className="box-footer">
                <div className="box-select"><MySelect options={options} /></div>
                <div><input type="text" placeholder="Ask MARCO" className="box-input" value={userInput} onChange={handleInputChange} /> </div>
                <div><button className="ask-button"  onClick={handleAskClick}>Ask</button></div>
            </div>
        </div>
    );
}
