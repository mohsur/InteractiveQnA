import React from 'react';
import "./sideBar.css";

export default function Sidebar({ open, handleMarcoClick }) {
    return (
        <div className={`sidebar ${open ? 'open' : ''}`}>
            <div className="menu">
                <div className="menu-item" onClick={handleMarcoClick}>Marco</div>
                <div className="menu-item">Social Watch</div>
                <div className="menu-item">Web Analytics</div>
            </div>
             
        </div>
    );
}
