import React from 'react';
import "./sideBar.css";

export default function Sidebar({open}) {
    return (
        <div className={`sidebar ${open ? 'open' : ''}`}>
            <div className="menu">
                <div className="menu-item">Marco</div>
                <div className="menu-item">Social Watch</div>
                <div className="menu-item">Web Analytics</div>
            </div>
        </div>
    );
}
