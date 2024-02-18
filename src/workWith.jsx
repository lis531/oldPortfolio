import { SiVite, SiUnity, SiGithub, SiHtml5, SiCsharp, SiCplusplus, SiCsswizardry, SiAdobephotoshop, SiAdobepremierepro, SiUnrealengine, SiVisualstudiocode, SiReact, SiTypescript, SiJavascript, SiAstro, SiFirebase } from 'react-icons/si'
import React, { useRef } from 'react';
import animations from './animations';

function WorkWith() {
    const elements = useRef([]);

    animations(elements);
    return (
        <div className='sitePart'>
            <h1 ref={el => elements.current[0] = el}><span className="anim">I</span><span className='space'></span><span className="anim">w</span><span className="anim">o</span><span className="anim">r</span><span className="anim">k</span><span className='space'></span><span className="anim">w</span><span className="anim">i</span><span className="anim">t</span><span className="anim">h</span></h1>
            <div className='icons-wrapper workWith'>
                <button className='iconButton icon' ref={el => elements.current[1] = el}><SiHtml5 /></button>
                <button className='iconButton icon' ref={el => elements.current[2] = el}><SiJavascript /></button>
                <button className='iconButton icon' ref={el => elements.current[3] = el}><SiTypescript /></button>
                <button className='iconButton icon' ref={el => elements.current[4] = el}><SiCsswizardry /></button>
                <button className='iconButton icon' ref={el => elements.current[5] = el}><SiReact /></button>
                <button className='iconButton icon' ref={el => elements.current[6] = el}><SiVite /></button>
                <button className='iconButton icon' ref={el => elements.current[7] = el}><SiAstro /></button>
                <button className='iconButton icon' ref={el => elements.current[8] = el}><SiFirebase /></button>
                <button className='iconButton icon' ref={el => elements.current[9] = el}><SiCsharp /></button>
                <button className='iconButton icon' ref={el => elements.current[10] = el}><SiCplusplus /></button>
                <button className='iconButton icon' ref={el => elements.current[11] = el}><SiUnity /></button>
                <button className='iconButton icon' ref={el => elements.current[12] = el}><SiVisualstudiocode /></button>
                <button className='iconButton icon' ref={el => elements.current[13] = el}><SiGithub /></button>
                <button className='iconButton icon' ref={el => elements.current[14] = el}><SiAdobephotoshop /></button>
                <button className='iconButton icon' ref={el => elements.current[15] = el}><SiAdobepremierepro /></button>
            </div>
        </div>
    )
}
export default WorkWith