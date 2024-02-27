import { useState, useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TbBrandGooglePlay } from 'react-icons/tb';
import animations from './animations';
import './projects.css';

const projectsInfo = {
  SnakeTHEgame: {
    header: 'Snake the game',
    paragraph: 'A snake game with some enhancements made using C# in Unity. Planned to relase in 2023. (not in development)',
    href: 'https://github.com/lis531/SnakeTHEgame',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  DiscordBot: {
    header: 'Discord Bot',
    paragraph: 'A discord bot made using Python. Planned to relase in 2023. (moderate development)',
    href: 'https://github.com/lis531/DiscordBot',
    tryOut: '',
    tryOutStyle: { display: 'none' }
  },
  Borufi: {
    header: 'Borufi',
    paragraph: 'A music library (AKA Spotify). Planned to fully relase before end of January 2023. (moderate support)',
    href: 'https://github.com/lis531/borufi',
    tryOut: 'https://borufi.netlify.app/',
    tryOutStyle: { display: 'visible' }
  },
  TechNews: {
    header: 'TechNews',
    paragraph: 'TechNews is my first school project made using HTML, CSS and JavaScript. Relased. (moderate support)',
    href: 'https://github.com/lis531/TechNews',
    tryOut: 'https://lis531.github.io/TechNews/',
    tryOutStyle: { display: 'visible' }
  },
  SchoolProjects: {
    header: 'SchoolProjects',
    paragraph: 'SchoolProjects is website for hosting my other (smaller) school projects made using HTML, CSS and JavaScript. (moderate support)',
    href: 'https://github.com/lis531/schoolProjects/',
    tryOut: 'https://lis531.github.io/schoolProjects/',
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

  const backgroundRef = useRef(null);
  useEffect(() => {
    const background = backgroundRef.current;

    document.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if(scrollY !== 0) {
        background.style.backgroundPosition = `0px ${scrollY / 2}px`;
      } else {
        background.style.backgroundPosition = `0px 0px`;
      }
    });
  });

  return (
    <>
      <h1 ref={el => elements.current[0] = el}><span className="anim">M</span><span className="anim">y</span><span className='space'></span><span className="anim">P</span><span className="anim">r</span><span className="anim">o</span><span className="anim">j</span><span className="anim">e</span><span className="anim">c</span><span className="anim">t</span><span className="anim">s</span></h1>
      <div className="sitePart" id="projects" ref={backgroundRef}>
        <button onClick={() => toggleModal('Borufi')} className="box">
          <img src='../borufi.png'></img>
          <h3>Borufi</h3>
        </button>
        <button onClick={() => toggleModal('SchoolProjects')} className="box">
          <img src='../schoolProjectBg.png'></img>
          <h3>SchoolProjects</h3>
        </button>
        <button onClick={() => toggleModal('TechNews')} className="box">
          <img src='../techNewsBg.png'></img>
          <h3>TechNews</h3>
        </button>
        <button onClick={() => toggleModal('DiscordBot')} className="box">
          <img src='../discord.png'></img>
          <h3>Discord</h3>
        </button>
        <button onClick={() => toggleModal('SnakeTHEgame')} className="box">
          <img src='../snake.png'></img>
          <h3>SnakeTHEgame</h3>
        </button>
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
