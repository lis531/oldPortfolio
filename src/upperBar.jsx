import { VscColorMode } from 'react-icons/vsc';
import { HiOutlineArrowDown } from 'react-icons/hi';

function upperBar() {
    return(
        <>
            <div className="barStatic">
                <div className="bar">
                    <div className="div1">
                        <a href="#home">Home</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className='div2'>
                        <button className="modeChange"><VscColorMode /></button>
                        {/*<div className="dropdown">
                            <button className="dropbtn"><HiOutlineArrowDown/></button>
                            <div className="dropdown-content">
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                                <a href="#">Link</a>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
export default upperBar