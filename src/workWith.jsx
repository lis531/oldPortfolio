import { SiCsharp, SiCplusplus, SiCsswizardry, SiAdobephotoshop, SiAdobepremierepro, SiUnrealengine, SiReact, SiPython } from 'react-icons/si'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { BsUnity } from 'react-icons/bs'

function WorkWith() {
    return (
        <>
            <h1>I work with</h1>
            <div className='icons-wrapper'>
                <button className='iconButton' ><SiCsharp className='icon' /></button>
                <button className='iconButton' ><SiCplusplus className='icon' /></button>
                <button className='iconButton' ><SiPython className='icon' /></button>
                <button className='iconButton' ><AiFillHtml5 className='icon' /></button>
                <button className='iconButton' ><SiCsswizardry className='icon' /></button>
                <button className='iconButton' ><SiReact className='icon' /></button>
                <button className='iconButton' ><BsUnity className='icon' /></button>
                <button className='iconButton' ><SiUnrealengine className='icon' /></button>
                <button className='iconButton' ><AiFillGithub className='icon' /></button>
                <button className='iconButton' ><SiAdobephotoshop className='icon' /></button>
                <button className='iconButton' ><SiAdobepremierepro className='icon' /></button>
            </div>
        </>
    )
}
export default WorkWith