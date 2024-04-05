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
                <a href="https://en.wikipedia.org/wiki/HTML5" className='iconButton icon' ref={el => elements.current[1] = el}><SiHtml5 /></a>
                <a href="https://en.wikipedia.org/wiki/JavaScript" className='iconButton icon' ref={el => elements.current[2] = el}><SiJavascript /></a>
                <a href="https://www.typescriptlang.org/" className='iconButton icon' ref={el => elements.current[3] = el}><SiTypescript /></a>
                <a href="https://en.wikipedia.org/wiki/CSS" className='iconButton icon' ref={el => elements.current[4] = el}><SiCsswizardry /></a>
                <a href="https://react.dev/" className='iconButton icon' ref={el => elements.current[5] = el}><SiReact /></a>
                <a href="https://vitejs.dev/" className='iconButton icon' ref={el => elements.current[6] = el}><SiVite /></a>
                <a href="https://astro.build/" className='iconButton icon' ref={el => elements.current[7] = el}><SiAstro /></a>
                <a href="https://firebase.google.com/" className='iconButton icon' ref={el => elements.current[8] = el}><SiFirebase /></a>
                <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" className='iconButton icon' ref={el => elements.current[9] = el}><SiCsharp /></a>
                <a href="https://en.wikipedia.org/wiki/C++" className='iconButton icon' ref={el => elements.current[10] = el}><SiCplusplus /></a>
                <a href="https://unity.com/" className='iconButton icon' ref={el => elements.current[11] = el}><SiUnity /></a>
                <a href="https://code.visualstudio.com/" className='iconButton icon' ref={el => elements.current[12] = el}><SiVisualstudiocode /></a>
                <a href="https://github.com/" className='iconButton icon' ref={el => elements.current[13] = el}><SiGithub /></a>
                <a href="https://www.adobe.com/products/photoshop.html" className='iconButton icon' ref={el => elements.current[14] = el}><SiAdobephotoshop /></a>
                <a href="https://www.adobe.com/products/premiere.html" className='iconButton icon' ref={el => elements.current[15] = el}><SiAdobepremierepro /></a>
            </div>
        </div>
    )
}
export default WorkWith