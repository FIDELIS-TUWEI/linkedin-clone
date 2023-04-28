import LoginComponent from '../components/LoginComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../firebaseConfig';

const Login = () => {
    // useEffect
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            console.log(res?.accessToken)
        });
    }, []);
    return <LoginComponent />
}
 
export default Login;