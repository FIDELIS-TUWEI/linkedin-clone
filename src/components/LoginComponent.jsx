import { useState } from 'react';
import { RegisterAPI } from '../api/AuthAPI';
import '../Sass/LoginComponent.scss';
import LinkedinLogo from '../assets/linkedinLogo.png'

const LoginComponent = () => {
    //useState
    const [credentials, setCredentials] = useState();

    //function call
    const login = async () => {
        try {
            let res = await RegisterAPI(credentials.email, credentials.password);
            console.log(res?.user)
        }
        catch (err) {
            console.log(err)
        }  
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

            <hr className='hr-text' data-content='OR' />
        </div>
     );
}
 
export default LoginComponent;