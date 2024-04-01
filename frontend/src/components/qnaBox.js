import React ,{useState,useEffect} from 'react';
import "./qnaBox.css";
import MySelect from './select';
import axios from 'axios';
import { jsPDF } from 'jspdf';


export default function QnABox() {
    const [dummyData, setDummyData] = useState([]); // State to store dummy data

    useEffect(() => {
        
        axios.get('http://localhost:4000/dummy-data') // Replace with your backend URL
            .then(response => {
                setDummyData(response.data); // Set the fetched data to state
            })
            .catch(error => {
                console.error('Error fetching dummy data:', error);
            });
    }, []); 

    const handleCopy = (response) => {
        navigator.clipboard.writeText(response)
            .then(() => {
                console.log('Response copied to clipboard:', response);
               
            })
            .catch((error) => {
                console.error('Error copying response to clipboard:', error);
                
            });
    };

    const handleThumbsUp = (response) => {
      
    };

    const handleThumbsDown = (response) => {
        
    };

    const handleShareClick = () => {
        
    };

    const handleExportClick = () => {
        const doc = new jsPDF();
        let y = 10;
        dummyData.forEach(({ question, answer }) => {
            doc.text(question, 10, y);
            doc.text(answer, 10, y + 10);
            y += 20;
        });
        doc.save('dummyData.pdf');
    };

    
    const options = [
        { value: 'seo', label: 'SEO' },
        { value: 'webanalytics', label: 'Web Analytics' },
    ];

    return (
        <div className="qna-box">
            <div className="box-header">
            <button className='box-header-item' onClick={handleShareClick}>Share</button>
            <button className='box-header-item' onClick={handleExportClick}>Export</button>
            </div>
            {dummyData.map((data, index) => (
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
                <div><input type="text" placeholder="Ask MARCO" className="box-input" /> </div>
                <div><button className="ask-button">Ask</button></div>
                
            </div>
        </div>
    );
}
