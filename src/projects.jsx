import { useState, useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TbBrandGooglePlay } from 'react-icons/tb';
import animations from './animations';

const projectsInfo = {
  SnakeTHEgame: {
    header: 'Snake the game',
    paragraph: 'A snake game with some enhancements made using C# in Unity. Planned to relase in 2023. (not in development)',
    href: 'https://github.com/lis531/SnakeTHEgame',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  GoodToKnow: {
    header: 'GoodToKnow',
    paragraph: 'An app made with HTML, CSS, TypeScript and react using OpenAI to give you some interesting information everyday. No relase date. (not in development)',
    href: 'https://github.com/lis531/GoodToKnow',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  DiscordBot: {
    header: 'Discord Bot',
    paragraph: 'A discord bot made using Python. Planned to relase in 2023. (active development)',
    href: 'https://github.com/lis531/DiscordBot',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  MyDiary: {
    header: 'MyDiary',
    paragraph: 'MyDiary is a website made using HTML, CSS, TypeScript and react. Planned to relase in 2023. (not in development)',
    href: 'https://github.com/lis531/MyDiary',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  TechNews: {
    header: 'TechNews',
    paragraph: 'TechNews is my first school project made using HTML, CSS and JavaScript. Planned to relase in 2023. (active development)',
    href: 'https://github.com/lis531/TechNews',
    tryOut: 'https://lis531.github.io/TechNews/',
    tryOutStyle: { display: 'visible' }
  },
  SchoolProjects: {
    header: 'SchoolProjects',
    paragraph: 'SchoolProjects is website for hosting my other (smaller) school projects made using HTML, CSS and JavaScript. (active development)',
    href: 'https://github.com/lis531/SchoolProjects/',
    tryOut: 'https://lis531.github.io/SchoolProjects/',
    tryOutStyle: { display: 'visible' }
  }
};

const Projects = () => {
  let [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    header: '',
    paragraph: '',
    href: '',
    tryOut: '',
    tryOutStyle: '',
  });

  const toggleModal = (id) => {
    setModalVisible(!modalVisible);
  
    if (!modalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    if (id) {
      const { header, paragraph, href, tryOut, tryOutStyle } = projectsInfo[id];
      setModalContent({ header, paragraph, href, tryOut, tryOutStyle });
    }
  };

  const elements = useRef([]);
  const addHoverAnimation = animations(elements);

  useEffect(() => {
    addHoverAnimation('anim');
  }, [addHoverAnimation]);

  const modalClassName = `modal ${modalVisible ? '' : 'hidden'}`;

  return (
    <>
      <div className="Projects sitePart" id="projects">
        <h1 ref={el => elements.current[0] = el}><span className="anim">M</span><span className="anim">y</span><span className='space'></span><span className="anim">P</span><span className="anim">r</span><span className="anim">o</span><span className="anim">j</span><span className="anim">e</span><span className="anim">c</span><span className="anim">t</span><span className="anim">s</span></h1>
        <div className="wrapper">
          <button className="box" id="TechNews" onClick={() => toggleModal('TechNews')} ref={el => elements.current[1] = el}><span><h3>TechNews</h3></span></button>
          <button className="box" id="SchoolProjects" onClick={() => toggleModal('SchoolProjects')} ref={el => elements.current[2] = el}><span><h3>SchoolProjects</h3></span></button>
        </div>
        <div className="wrapper">
          <button className="box" id="DiscordBot" onClick={() => toggleModal('DiscordBot')} ref={el => elements.current[3] = el}><span><h3>DiscordBot</h3></span></button>
          <button className="box" id="MyDiary" onClick={() => toggleModal('MyDiary')} ref={el => elements.current[4] = el}><span><h3>MyDiary</h3></span></button>
        </div>
        <div className="wrapper">
          <button className="box" id="SnakeTHEgame" onClick={() => toggleModal('SnakeTHEgame')} ref={el => elements.current[5] = el}><span><h3>SnakeTHEgame</h3></span></button>
          <button className="box" id="GoodToKnow" onClick={() => toggleModal('GoodToKnow')} ref={el => elements.current[6] = el}><span><h3>GoodToKnow</h3></span></button>
        </div>
      </div>
      <div className={modalClassName}>
        {modalVisible && (
          <div className='modal-div'>
            <div className="modal-content">
              <div>
                <h2 className='modal-header'>{modalContent.header}</h2>
                <button onClick={() => toggleModal()}>&times;</button>
              </div>
              <p className='modal-par'>{modalContent.paragraph}</p>
            </div>
            <div className='icons-wrapper'>
              <a href={modalContent.href}><AiFillGithub className='modal-icon icon' /></a>
              <a href={modalContent.tryOut} style={modalContent.tryOutStyle}><TbBrandGooglePlay className='modal-icon icon' /></a>
            </div>
          </div>
        )}
      </div>
    </>
  )
};

export default Projects;