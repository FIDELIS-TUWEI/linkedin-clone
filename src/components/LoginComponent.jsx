import {LoginAPI} from '../api/AuthAPI';
import '../Sass/LoginComponent.scss';

const LoginComponent = () => {
    return ( 
        <div>
            <h1>Login Component</h1>
            <button className='login-btn'>LOGIN to LinkedIn</button>
        </div>
     );
}
 
export default LoginComponent;