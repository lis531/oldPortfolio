import { VscColorMode } from 'react-icons/vsc';
import React, { useState } from "react";
import './navBar.css';

function NavBar() {
    const [colorMode, setColorMode] = useState(localStorage.getItem("theme") || "dark");
    if (colorMode === "dark") {
        document.documentElement.style.setProperty('--color-background', '#1F1F1F');
        document.documentElement.style.setProperty('--font-color', '#e0e0e0');
        document.documentElement.style.setProperty('--bar-color', '#161616');
        document.documentElement.style.setProperty('--box-shadow-color', '#161616');
        document.documentElement.style.setProperty('--text-shadow-color', '#353535');
        document.documentElement.style.setProperty('--input-color', '#1B1B1B');
    }
    else {
        document.documentElement.style.setProperty('--color-background', '#e9e9e9');
        document.documentElement.style.setProperty('--font-color', '#1F1F1F');
        document.documentElement.style.setProperty('--bar-color', '#d9d9d9');
        document.documentElement.style.setProperty('--box-shadow-color', '#d9d9d9');
        document.documentElement.style.setProperty('--text-shadow-color', '#bababa');
        document.documentElement.style.setProperty('--input-color', '#e4e4e4');
    }

    return(
        <>
            <div className="bar">
                <div className="barPart1">
                    <a href="#home" className="hover-animation">Home</a>
                    <a href="#projects" className="hover-animation">Projects</a>
                    <a href="#contact" className="hover-animation">Contact</a>
                </div>
                <div className='barPart2'>
                    <button className="clickableIcon icon modeChange" onClick={() => {
                        const newMode = localStorage.getItem("theme") === "dark" ? "light" : "dark";
                        localStorage.setItem("theme", newMode);
                        setColorMode(newMode);
                        }}><VscColorMode className='modeChangeIcon'/>
                    </button>
                </div>
            </div>
        </>
    )
}
export default NavBar
