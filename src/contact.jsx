import { TbMailForward } from 'react-icons/tb';
import { BsDiscord } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { useRef, useEffect } from 'react';
import animations from './animations';

function Contact() {
    const elements = useRef([]);
    const addHoverAnimation = animations(elements);
  
    useEffect(() => {
      addHoverAnimation('anim');
    }, [addHoverAnimation]);
    return(
        <div className="contact sitePart" id='contact'>
            <h1 ref={el => elements.current[0] = el}><span className='anim'>C</span><span className='anim'>o</span><span className='anim'>n</span><span className='anim'>t</span><span className='anim'>a</span><span className='anim'>c</span><span className='anim'>t</span></h1>
            <div className='icons-wrapper' ref={el => elements.current[1] = el}>
                <button className='clickableIcon icon mailIcon' onClick={() => window.open('mailto:borys.gajewski7@gmail.com')}><TbMailForward /></button>
                <button className='clickableIcon icon discordIcon' onClick={() => window.open('https://discord.com/users/438396518375096320')}><BsDiscord /></button>
                <button className='clickableIcon icon githubIcon' onClick={() => window.open('https://github.com/lis531')}><AiFillGithub /></button>
            </div>
        </div>
    )
}
export default Contact