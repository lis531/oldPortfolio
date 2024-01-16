import { SiCsharp, SiCplusplus, SiCsswizardry, SiAdobephotoshop, SiAdobepremierepro, SiUnrealengine, SiReact, SiPython, SiTypescript, SiJavascript } from 'react-icons/si'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { BsUnity } from 'react-icons/bs'
import { TbBrandKotlin } from 'react-icons/tb'
import React, { useRef } from 'react';
import animations from './animations';

function WorkWith() {
    const elements = useRef([]);

    animations(elements);
    return (
        <div className='sitePart'>
            <h1 ref={el => elements.current[0] = el}><span className="anim">I</span><span className='space'></span><span className="anim">w</span><span className="anim">o</span><span className="anim">r</span><span className="anim">k</span><span className='space'></span><span className="anim">w</span><span className="anim">i</span><span className="anim">t</span><span className="anim">h</span></h1>
            <div className='icons-wrapper workWith'>
                <button className='iconButton icon' ref={el => elements.current[1] = el}><AiFillHtml5 /></button>
                <button className='iconButton icon' ref={el => elements.current[2] = el}><SiJavascript /></button>
                <button className='iconButton icon' ref={el => elements.current[3] = el}><SiTypescript /></button>
                <button className='iconButton icon' ref={el => elements.current[4] = el}><SiCsswizardry /></button>
                <button className='iconButton icon' ref={el => elements.current[5] = el}><SiReact /></button>
                <button className='iconButton icon' ref={el => elements.current[6] = el}><SiCsharp /></button>
                <button className='iconButton icon' ref={el => elements.current[7] = el}><SiCplusplus /></button>
                <button className='iconButton icon' ref={el => elements.current[10] = el}><BsUnity /></button>
                <button className='iconButton icon' ref={el => elements.current[12] = el}><AiFillGithub /></button>
                <button className='iconButton icon' ref={el => elements.current[13] = el}><SiAdobephotoshop /></button>
                <button className='iconButton icon' ref={el => elements.current[14] = el}><SiAdobepremierepro /></button>
            </div>
        </div>
    )
}
export default WorkWith