import './index.scss'
import LinkedinLogo from '../../../assets/linkedinLogo.png'

const TopBar = () => {
    return ( 
        <div className='topbar-main'>
            <img className='linkedin-logo' src={LinkedinLogo} alt="LinkedinLogo" />
        </div>
     );
}
 
export default TopBar;