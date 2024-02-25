import { FiSun, FiMoon } from "react-icons/fi";
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
        document.documentElement.style.setProperty('--additional-color', '#282828');
    }
    else {
        document.documentElement.style.setProperty('--color-background', '#e9e9e9');
        document.documentElement.style.setProperty('--font-color', '#1F1F1F');
        document.documentElement.style.setProperty('--bar-color', '#d9d9d9');
        document.documentElement.style.setProperty('--box-shadow-color', '#d9d9d9');
        document.documentElement.style.setProperty('--text-shadow-color', '#bababa');
        document.documentElement.style.setProperty('--additional-color', '#cfcfcf');
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
                    <div className="modeChange">
                        <button className='modeChangeIcon sun' onClick={() => {
                            localStorage.setItem("theme", "light");
                            setColorMode("light");
                            document.getElementsByClassName("sun")[0].firstElementChild.classList.add('activeMode');
                            document.getElementsByClassName("moon")[0].firstElementChild.classList.remove('activeMode');
                            }}>
                            <FiSun/>
                        </button>
                        <button className='modeChangeIcon moon' onClick={() => {
                            localStorage.setItem("theme", "dark");
                            setColorMode("dark");
                            document.getElementsByClassName("moon")[0].firstElementChild.classList.add('activeMode');
                            document.getElementsByClassName("sun")[0].firstElementChild.classList.remove('activeMode');

                            }}>
                            <FiMoon/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar
