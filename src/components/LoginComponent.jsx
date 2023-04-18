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
            <button onClick={login} className='login-btn'>Login to LinkedIn</button>
        </div>
     );
}
 
export default LoginComponent;