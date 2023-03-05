import React, { useState } from 'react';

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [modalHeader, setModalHeader] = useState('');
  const [modalPar, setModalPar] = useState('');

  const toggleModal = (id) => {
    setModal(!modal);
    
    if(id === 'SnakeTHEgame') {
      setModalHeader('Snake the game');
      setModalPar('A simple snake game made with HTML, CSS and JavaScript. The game is fully responsive and works on all devices.');
    } else if(id === 'Calendar') {
      setModalHeader('Calendar');
      setModalPar('A simple calendar made with HTML, CSS and JavaScript. The calendar is fully responsive and works on all devices.');
    } else if(id === 'GoodToKnow') {
      setModalHeader('GoodToKnow');
      setModalPar('A simple app made with HTML, CSS and JavaScript. The app is fully responsive and works on all devices.');
    } else if(id === 'PhoneWidgets') {
      setModalHeader('Phone Widgets');
      setModalPar('A simple app made with HTML, CSS and JavaScript. The app is fully responsive and works on all devices.');
    }
  };

  if(modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  
  return (
    <>
      <div className="Projects" id="projects">
        <h1>My Projects</h1>
        <div className="wrapper">
          <button className="box" id="SnakeTHEgame" onClick={() => toggleModal("SnakeTHEgame")}><span>Snake the game</span></button>
          <button className="box" id="Calendar" onClick={() => toggleModal("Calendar")}><span>Calendar</span></button>
        </div>
        <div className="wrapper">
          <button className="box" id="GoodToKnow" onClick={() => toggleModal("GoodToKnow")}><span>GoodToKnow</span></button>
          <button className="box" id="PhoneWidgets" onClick={() => toggleModal("PhoneWidgets")}><span>Phone Widgets</span></button>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className='modal-header'>{modalHeader}</h2>
            <p className='modal-par'>{modalPar}</p>
            <button className="close-snake" onClick={() => toggleModal()}>CLOSE</button>
          </div>
        </div>
      )}
    </>
  )
}
export default Projects
