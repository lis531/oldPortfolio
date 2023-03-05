import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';

const projectsInfo = {
  SnakeTHEgame: {
    header: 'Snake the game',
    paragraph: 'A simple snake game made with C# in Unity. The game will be released this year.'
  },
  Calendar: {
    header: 'Calendar',
    paragraph: 'A calendar made with HTML, CSS and JavaScript with a lot of statistics. TBA.'
  },
  GoodToKnow: {
    header: 'GoodToKnow',
    paragraph: 'An app made with HTML, CSS and JavaScript using OpenAI. TBA.'
  },
  PhoneWidgets: {
    header: 'Phone Widgets',
    paragraph: 'An app made with ???. TBA.'
  }
};

const Projects = () => {
  let [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    header: '',
    paragraph: ''
  });

  const toggleModal = (id) => {
    setModalVisible(!modalVisible);
  
    if (!modalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    if (id) {
      const { header, paragraph } = projectsInfo[id];
      setModalContent({ header, paragraph });
    }
  };

  const modalClassName = `modal ${modalVisible ? '' : 'hidden'}`;

  return (
    <>
      <div className="Projects" id="projects">
        <h1>My Projects</h1>
        <div className="wrapper">
          <button className="box" id="SnakeTHEgame" onClick={() => toggleModal('SnakeTHEgame')}><span>Snake the game</span></button>
          <button className="box" id="Calendar" onClick={() => toggleModal('Calendar')}><span>Calendar</span></button>
        </div>
        <div className="wrapper">
          <button className="box" id="GoodToKnow" onClick={() => toggleModal('GoodToKnow')}><span>GoodToKnow</span></button>
          <button className="box" id="PhoneWidgets" onClick={() => toggleModal('PhoneWidgets')}><span>Phone Widgets</span></button>
        </div>
      </div>
      <div className={modalClassName}>
        {modalVisible && (
          <div className='modal-div'>
            <div className="modal-button">
              <button onClick={() => toggleModal()}>&times;</button>
            </div>
            <div className="modal-content">
              <h2 className='modal-header'>{modalContent.header}</h2>
              <p className='modal-par'>{modalContent.paragraph}</p>
              <AiFillGithub className='github-icon' />
            </div>
          </div>
        )}
      </div>
    </>
  )
};

export default Projects;