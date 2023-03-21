import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TbBrandGooglePlay } from 'react-icons/tb';

const projectsInfo = {
  SnakeTHEgame: {
    header: 'Snake the game',
    paragraph: 'A snake game with some enhancements made using C# in Unity. Release in 2023.',
    href: 'https://github.com/lis531/SnakeTHEgame',
    try: ''
  },
  Calendar: {
    header: 'Calendar',
    paragraph: 'A calendar made with HTML, CSS and JavaScript with a lot of statistics for example: how much meetings left till the end of the year ect. TBA.',
    href: 'https://github.com/lis531/Calendar',
    try: ''
  },
  GoodToKnow: {
    header: 'GoodToKnow',
    paragraph: 'An app made with HTML, CSS and JavaScript using OpenAI to give you some interesting information everyday. TBA.',
    href: 'https://github.com/lis531/GoodToKnow',
    tryOut: ''
  },
  PhoneWidgets: {
    header: 'Phone Widgets',
    paragraph: 'Phone widgets app with cool and fresh looking widgets that will make your phone shine. App made with ???. TBA.',
    href: 'https://github.com/lis531/PhoneWidgets',
    tryOut: ''
  },
  DiscordBot: {
    header: 'Discord Bot',
    paragraph: 'A discord bot made with JavaScript using discord.js library. 2023.',
    href: 'https://github.com/lis531/DiscordBot',
    tryOut: ''
  }
};

const Projects = () => {
  let [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    header: '',
    paragraph: '',
    href: '',
    tryOut: ''
  });

  const toggleModal = (id) => {
    setModalVisible(!modalVisible);
  
    if (!modalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    if (id) {
      const { header, paragraph, href, tryOut } = projectsInfo[id];
      setModalContent({ header, paragraph, href, tryOut });
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
        <div className="wrapper">
          <button className="box" id="DiscordBot" onClick={() => toggleModal('DiscordBot')}><span>DiscordBot</span></button>
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
            <div className='icons-wrapper'>
              <a href={modalContent.href} style={{all: 'inherit'}}><AiFillGithub className='icon modal-icon' /></a>
              <a href={modalContent.tryOut} style={{all: 'inherit'}}><TbBrandGooglePlay className='icon modal-icon' /></a>
            </div>
          </div>
        )}
      </div>
    </>
  )
};

export default Projects;
