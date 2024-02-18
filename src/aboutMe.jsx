import { useRef, useEffect } from 'react';
import animations from './animations';
import './aboutMe.css';

function AboutMe() {
  const elements = useRef([]);
  const addHoverAnimation = animations(elements);

  useEffect(() => {
    addHoverAnimation('anim');
  }, [addHoverAnimation]);

  return(
    <div className="aboutMe">
      <h1 ref={el => elements.current[0] = el}>
        <span className="anim">A</span><span className="anim">b</span><span className="anim">o</span><span className="anim">u</span><span className="anim">t</span><span className='space'></span><span className="anim">M</span><span className="anim">e</span>
      </h1>
      <p ref={el => elements.current[1] = el}>My name is Borys and I am from Poland. I enjoy creating websites, games and useful programs.</p>
    </div>
  )
}
export default AboutMe
