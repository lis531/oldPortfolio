import { FiSun, FiMoon } from "react-icons/fi";
import React, { useRef, useState, useEffect } from "react";
import './navBar.css';

function NavBar() {
    const sunRef = useRef(null);
    const moonRef = useRef(null);

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
    
    useEffect(() => {
        const sunButton = sunRef.current;
        const moonButton = moonRef.current;

        if(localStorage.getItem("theme") === null) {
            moonButton.firstElementChild.classList.add('activeMode');
            sunButton.firstElementChild.classList.remove('activeMode');
        }

        const theme = localStorage.getItem("theme");
        if (theme) {
            setColorMode(theme);
            const modeChange = document.getElementsByClassName("modeChange")[0];
            if (theme === "light") {
                modeChange.classList.add('activeModeLeft');
            } else {
                modeChange.classList.add('activeModeRight');
            }
        }

        const changeToLightMode = () => {
            localStorage.setItem("theme", "light");
            setColorMode("light");
            sunButton.firstElementChild.classList.add('activeMode');
            moonButton.firstElementChild.classList.remove('activeMode');
        };

        const changeToDarkMode = () => {
            localStorage.setItem("theme", "dark");
            setColorMode("dark");
            moonButton.firstElementChild.classList.add('activeMode');
            sunButton.firstElementChild.classList.remove('activeMode');
        };

        sunButton.addEventListener('click', changeToLightMode);
        moonButton.addEventListener('click', changeToDarkMode);

        return () => {
            sunButton.removeEventListener('click', changeToLightMode);
            moonButton.removeEventListener('click', changeToDarkMode);
        };
    }, []);

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
                        <button className='modeChangeIcon sun' ref={sunRef}>
                            <FiSun />
                        </button>
                        <button className='modeChangeIcon moon' ref={moonRef}>
                            <FiMoon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar