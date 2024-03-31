import React, { useState } from 'react';
import flableai_icon from "../utilities/flableai_icon.png"
import account_icon from "../utilities/account_icon.png"
import sideBar from "./sideBar"
import "./header.css"

export default function Header({toggleSideBar}){

    return (
        <>
        <header className="header">
            <div className="left-side">
                <img src={flableai_icon} alt="FlableAI Icon" className="flableai-icon" />
                <div className="burger-icon" onClick={toggleSideBar}>☰</div>
            </div>
            <div className="right-side">
                <div className="right-side-col">
                <div className="normal-text">www.admin.com </div>
                <div className="small-text">admin</div>
                </div>
                <img src={account_icon} alt="Account Icon" className="icon" />
            </div>
        </header>
        </>
    );
}