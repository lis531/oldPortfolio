import { VscColorMode } from 'react-icons/vsc';
import { HiOutlineArrowDown } from 'react-icons/hi';
import React, { useState } from "react";
import './index.css';

function upperBar() {
    const [colorMode, setColorMode] = useState("light");
    const [state, setState] = useState("light");
    //change --font-color and --color-background of the page to dark or light respectively
    if (state === "light") {
        document.documentElement.style.setProperty('--font-color', '#e0e0e0');
        document.documentElement.style.setProperty('--color-background', '#1F1F1F');
        document.documentElement.style.setProperty('--bar-color', '#161616');
        document.documentElement.style.setProperty('--box-shadow-color', '#161616');
        document.documentElement.style.setProperty('--text-shadow-color', '#353535');
        document.documentElement.style.setProperty('--input-color', '#1B1B1B');
    }
    else {
        document.documentElement.style.setProperty('--font-color', '#1F1F1F');
        document.documentElement.style.setProperty('--color-background', '#e9e9e9');
        document.documentElement.style.setProperty('--bar-color', '#e0e0e0');
        document.documentElement.style.setProperty('--box-shadow-color', '#e0e0e0');
        document.documentElement.style.setProperty('--text-shadow-color', '#cacaca');
        document.documentElement.style.setProperty('--input-color', '#e4e4e4');
    }

    return(
        <>
            <div className="barStatic">
                <div className="bar">
                    <div className="div1">
                        <a href="#home">Home</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className='div2'>
                        <button className="modeChange" onClick={() => {
                            setColorMode(colorMode === "light" ? "dark" : "light");
                            setState(colorMode === "light" ? "dark" : "light");
                        }}><VscColorMode /></button>
                        {/*<div className="dropdown">
                            <button className="dropbtn"><HiOutlineArrowDown/></button>
                            <div className="dropdown-content">
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
export default upperBar