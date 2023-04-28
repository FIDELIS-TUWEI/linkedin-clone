import LoginComponent from '../components/LoginComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // navigate hook
    const navigate = useNavigate();

    // useEffect
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(res?.accessToken) {
                navigate("/home");
            }
        });
    }, []);
    return <LoginComponent />
}
 
export default Login;