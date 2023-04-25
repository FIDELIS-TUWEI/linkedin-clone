import { useState } from 'react';
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI';
import LinkedinLogo from '../assets/linkedinLogo.png'
import GoogleButton from 'react-google-button';
import { navigate } from '../helpers/useNavigate';

import '../Sass/LoginComponent.scss';
import { toast } from 'react-toastify';


const LoginComponent = () => {

    //useState
    const [credentials, setCredentials] = useState();

    //function call
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success('Signed In to LinkedIn!')
        }
        catch (err) {
            toast.error('Please check your Credentials')
        }  
    }

    // google provider sigin
    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
    }

    return ( 
        <div className='login-wrapper'>
            <img src={LinkedinLogo} alt='' className='linkedin-logo' />

            <div className='login-wrapper-inner'>
            <h1 className='heading'>Sign in</h1>
            <p className='sub-heading'>Stay updated on your professional world</p>
            
            <div className='auth-inputs'>
                <input
                type='email'
                    onChange={(e) => 
                        setCredentials({...credentials, email: e.target.value})
                    }
                    className="common-input" 
                    placeholder="Email or Phone" 
                />
                <input
                    type='password'
                    onChange={(e) =>
                        setCredentials({...credentials, password: e.target.value})
                    }
                    className="common-input" 
                    placeholder="Password" 
                />
            </div>
                <button onClick={login} className='login-btn'>Sign in</button>
            </div>
                <hr className='hr-text' data-content='or'/>
            
            <div className='login-wrapper-inner'>
                <GoogleButton
                    className='google-btn' 
                    onClick={googleSignIn} 
                />

                <p className='go-to-signup'>
                    New to LinkedIn? <span className='join-now' onClick={() => navigate('/register')}>Join now</span>
                </p>
            </div>
        </div>
     );
}
 
export default LoginComponent;