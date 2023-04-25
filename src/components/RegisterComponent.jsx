import { useState } from 'react';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI';
import LinkedinLogo from '../assets/linkedinLogo.png'
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';


import '../Sass/LoginComponent.scss';
import { toast } from 'react-toastify';

const RegisterComponent = () => {

    // useNavigate
    let navigate = useNavigate();

    //useState
    const [credentials, setCredentials] = useState();

    //function call
    const login = async () => {
        try {
            let res = await RegisterAPI(credentials.email, credentials.password);
            toast.success('Account Created!');
            navigate('/home');
        }
        catch (err) {
            toast.error('Cannot create your Account')
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
            <h1 className='heading'>Make the most of your professional life</h1>
            
            <div className='auth-inputs'>
                <input
                type='email'
                    onChange={(e) => 
                        setCredentials({...credentials, email: e.target.value})
                    }
                    className="common-input" 
                    placeholder="Email or Phone number" 
                />
                <input
                    type='password'
                    onChange={(e) =>
                        setCredentials({...credentials, password: e.target.value})
                    }
                    className="common-input" 
                    placeholder="Password (6 or more characters)" 
                />
            </div>
                <button onClick={login} className='login-btn'>Agree & Join</button>
            </div>
                <hr className='hr-text' data-content='or'/>
            
            <div className='login-wrapper-inner'>
                <GoogleButton
                    className='google-btn' 
                    onClick={googleSignIn} 
                />

                <p className='go-to-signup'>
                    Already on LinkedIn? <span className='join-now' onClick={() => navigate('/')}>
                        Sign in
                    </span>
                </p>
            </div>
        </div>
     );
}
 
export default RegisterComponent;
