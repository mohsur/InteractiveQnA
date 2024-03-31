import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sideBar';
import React, { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="App">
     <Header toggleSideBar={toggleSideBar}/>
     <Sidebar open={sidebarOpen}/>
    </div>
  );
}

export default App;
