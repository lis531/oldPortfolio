import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';

const projectsInfo = {
  SnakeTHEgame: {
    header: 'Snake the game',
    paragraph: 'A snake game with some enhancements made using C# in Unity. Release in 2023.'
  },
  Calendar: {
    header: 'Calendar',
    paragraph: 'A calendar made with HTML, CSS and JavaScript with a lot of statistics like how much meetings till selected date ect. TBA.'
  },
  GoodToKnow: {
    header: 'GoodToKnow',
    paragraph: 'An app made with HTML, CSS and JavaScript using OpenAI to give you some interesting information everyday. TBA.'
  },
  PhoneWidgets: {
    header: 'Phone Widgets',
    paragraph: 'An phone widgets app with cool and fresh looking widgets that will make your phone shine. App made with ???. TBA.'
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
            </div>
            <AiFillGithub className='github-icon' />
          </div>
        )}
      </div>
    </>
  )
};

export default Projects;
