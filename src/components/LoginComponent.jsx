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
            <h1>Sign in</h1>
            
            {/*<div className='auth-inputs'>
                <input
                    onChange={(e) => 
                        setCredentials({...credentials, email: e.target.value})
                    }
                    className="common-input" 
                    placeholder="Enter your Email" 
                />
                <input
                    onChange={(e) =>
                        setCredentials({...credentials, password: e.target.value})
                    }
                    className="common-input" 
                    placeholder="Enter your Password" 
                />
            </div>
                <button onClick={login} className='login-btn'>Login to LinkedIn</button>*/}
        </div>
     );
}
 
export default LoginComponent;