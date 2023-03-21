import { TbMailForward } from 'react-icons/tb';
import { BsDiscord } from 'react-icons/bs';

function BottomIcons() {
    return(
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <div className='icons-wrapper'>
                <button className='modeChange' ><TbMailForward className='icon' /></button>
                <button className='modeChange'><BsDiscord className='icon' /></button>
            </div>
        </div>
    )
}
export default BottomIcons