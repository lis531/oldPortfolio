import { useState, useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TbBrandGooglePlay } from 'react-icons/tb';
import animations from './animations';

const projectsInfo = {
  SnakeTHEgame: {
    header: 'Snake the game',
    paragraph: 'A snake game with some enhancements made using C# in Unity. Release in 2023.',
    href: 'https://github.com/lis531/SnakeTHEgame',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  GoodToKnow: {
    header: 'GoodToKnow',
    paragraph: 'An app made with HTML, CSS and JavaScript using OpenAI to give you some interesting information everyday. TBA.',
    href: 'https://github.com/lis531/GoodToKnow',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  FPS: {
    header: 'FPS',
    paragraph: 'FPS game. App made with UE5. 2023.',
    href: 'https://github.com/lis531/FPS',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  DiscordBot: {
    header: 'Discord Bot',
    paragraph: 'A discord bot made using Python. 2023.',
    href: 'https://github.com/lis531/DiscordBot',
    tryOut: '',
    tryOutStyle: { display: 'none' }
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
          <button className="box" id="SnakeTHEgame" onClick={() => toggleModal('SnakeTHEgame')} ref={el => elements.current[1] = el}><span><h3>Snake the game</h3></span></button>
          <button className="box" id="GoodToKnow" onClick={() => toggleModal('GoodToKnow')} ref={el => elements.current[3] = el}><span><h3>GoodToKnow</h3></span></button>
        </div>
        <div className="wrapper">
        <button className="box" id="FPS" onClick={() => toggleModal('FPS')} ref={el => elements.current[2] = el}><span><h3>FPS</h3></span></button>
          <button className="box" id="DiscordBot" onClick={() => toggleModal('DiscordBot')} ref={el => elements.current[4] = el}><span><h3>DiscordBot</h3></span></button>
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