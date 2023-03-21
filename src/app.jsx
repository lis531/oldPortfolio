import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Projects from './projects'
import UpperBar from './upperBar'
import AboutMe from './AboutMe'
import BottomIcons from './bottomIcons'
import WorkWith from './workWith'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UpperBar />
        <AboutMe />
        <WorkWith />
        <Projects />
        <BottomIcons />
        <Footer />
    </React.StrictMode>
)