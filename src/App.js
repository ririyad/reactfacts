import React from "react";
import Navbar from "./components/Navbar"
import Maincontent from "./components/Main"
import "./style.css"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Maincontent />
        </div>
    );
}