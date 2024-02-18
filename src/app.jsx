import React from 'react'
import ReactDOM from 'react-dom/client'
import './app.css'
import Projects from './projects.jsx'
import NavBar from './navBar.jsx'
import AboutMe from './aboutMe.jsx'
import Contact from './contact.jsx'
import WorkWith from './workWith.jsx'
import Footer from './footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavBar />
        <AboutMe />
        <WorkWith />
        <Projects />
        <Contact />
        <Footer />
    </React.StrictMode>
)