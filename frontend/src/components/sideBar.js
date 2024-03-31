import React,{useState} from 'react';
import "./sideBar.css";

export default function Sidebar({ open, handleMarcoClick }) {

    const [marcoClicked, setMarcoClicked] = useState(false);
    const handleClick = () => {
        setMarcoClicked(true);
        handleMarcoClick(); 
    };
    return (
        <div className={`sidebar ${open ? 'open' : ''}`}>
            <div className="menu">
                <div className={`menu-item ${marcoClicked ? 'marco-clicked' : ''}`} onClick={handleClick}>Marco</div>
                <div className="menu-item">Social Watch</div>
                <div className="menu-item">Web Analytics</div>
            </div>
             
        </div>
    );
}
