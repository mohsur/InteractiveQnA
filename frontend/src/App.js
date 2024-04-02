import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sideBar';
import React, { useState } from 'react';
import HistoryBar from './components/historyBar';
import QnABox from "./components/qnaBox";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [marcoClicked, setMarcoClicked] = useState(false);
  const [history, setHistory] = useState([]);
  const [newChatTrigger, setNewChatTrigger] = useState(false);

  const addToHistory = (data) => {
        setHistory(prevHistory => [...prevHistory, data]);
  };
  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleMarcoClick = () => {
    setMarcoClicked(true);
  };
  const handleNewChat = () => {
    setNewChatTrigger(prev => !prev); 
  };

  return (
    <div className="App">
     <Header toggleSideBar={toggleSideBar}/>
     <div className="container">
        <div className="container">
        <Sidebar open={sidebarOpen} handleMarcoClick={handleMarcoClick} />
        <div className={`content ${sidebarOpen ? 'shifted' : ''}`}>
          {marcoClicked && <HistoryBar history={history} onNewChat={handleNewChat} />}
        </div>
        {marcoClicked && <QnABox history={history}onSearch={addToHistory} newChatTrigger={newChatTrigger}/>} 
        </div>
     </div>
    </div>
  );
}

export default App;
