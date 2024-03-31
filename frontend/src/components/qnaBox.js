import React from 'react';
import Select from 'react-select';
import "./qnaBox.css";



export default function QnABox() {

    const handleCopy = (text) => {
        
    };

    const handleThumbsUp = (response) => {
      
    };

    const handleThumbsDown = (response) => {
        
    };

    const handleShareClick = () => {
        
    };

    const handleExportClick = () => {
        
    };
    
    const dummyData = [
        { question: "Q: What is the capital of France?", response: "A: The capital of France is Paris." },
        { question: "Q: Who is the president of the United States?", response: "A: The president of the United States is Joe Biden." },
        { question: "Q: What is the largest mammal on Earth?", response: "A: The largest mammal on Earth is the blue whale." }
    ];
    const options = [
        { value: 'sage', label: 'Sage' },
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
                    <div className="response">{data.response}</div>
                    
                </div>
                <div className="feedback">
                            <button onClick={() => handleThumbsUp(data.response)} title="You like the response" >&#128077;</button>
                            <button onClick={() => handleThumbsDown(data.response)}title="You donot like the response">&#128078;</button>
                            <button onClick={() => handleCopy(data.response)} title="Copy to clipboard">&#128203;</button>
                </div>
            </div>
            ))}
            <div className="box-footer">
                <Select options={options} />
                <div>
                <input type="text" placeholder="Ask MARCO" />
                <button >Ask</button>
                </div>
            </div>
        </div>
    );
}
