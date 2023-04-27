import LoginComponent from '../components/LoginComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

const Login = () => {
    return ( 
        <LoginComponent />
     );
}
 
export default Login;