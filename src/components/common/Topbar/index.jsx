import './index.scss'
import LinkedinLogo from '../../../assets/linkedinLogo.png'
import User from '../../../assets/user.png'
import { 
    AiOutlineHome, 
    AiOutlineSearch, 
    AiOutlineUserSwitch,
    AiOutlineMessage,
    AiOutlineBell 
} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { BsBriefcase } from 'react-icons/bs'

const TopBar = () => {

    // useNavigate hook
    let navigate = useNavigate();

    // Home Icon event handler
    const goTo = (route) => {
        navigate(route)
    };

    return ( 
        <div className='topbar-main'>
            <img className='linkedin-logo' src={LinkedinLogo} alt="LinkedinLogo" />

            {/* React icons */}
            <div className='react-icons'>
                <AiOutlineSearch size={30} className='react-icon' />
                <AiOutlineHome size={30} className='react-icon' onClick={() => goTo('/home')} />
                <AiOutlineUserSwitch size={30} className='react-icon' onClick={() => goTo('/profile')} />
                <BsBriefcase size={30} className='react-icon' />
                <AiOutlineMessage size={30} className='react-icon' />
                <AiOutlineBell size={30} className='react-icon' />
            </div>

            {/* User Icon */}
            <img className='user-logo' src={User} alt="User" />
        </div>
     );
}
 
export default TopBar;