import './index.scss'
import LinkedinLogo from '../../../assets/linkedinLogo.png'
import { AiOutlineHome } from 'react-icons/ai'

const TopBar = () => {
    return ( 
        <div className='topbar-main'>
            <img className='linkedin-logo' src={LinkedinLogo} alt="LinkedinLogo" />
            <AiOutlineHome />
        </div>
     );
}
 
export default TopBar;