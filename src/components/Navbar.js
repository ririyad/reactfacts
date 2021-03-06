import React from "react";
import reactlogo from "../images/react-icon-small.png"

export default function Navbar() {
    return(
        <nav>
            <img 
                src= {reactlogo}
                alt="React Logo"
                className="nav-icon" 
            />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course: Project 01 </h4>
        </nav>
    )
}