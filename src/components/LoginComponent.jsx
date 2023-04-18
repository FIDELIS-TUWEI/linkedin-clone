import {LoginAPI} from '../api/AuthAPI';
import '../Sass/LoginComponent.scss';

const LoginComponent = () => {
    //function call
    const login = () => {
       let res = LoginAPI();
       console.log(res);
    }
    return ( 
        <div>
            <h1>Login Component</h1>
            <input className="common-input" placeholder="Enter your Email" />
            <input className="common-input" placeholder="Enter your Password" />
            <button onClick={login} className='login-btn'>Login to LinkedIn</button>
        </div>
     );
}
 
export default LoginComponent;