import LoginComponent from '../components/LoginComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';

const Login = () => {

    // state hook for loading spinner
    const [loading, setLoading] = useState(true)

    // navigate hook
    const navigate = useNavigate();

    // useEffect
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(res?.accessToken) {
                navigate("/home");
            }
            else {
                setLoading(false)
            }
        });
    }, []);
    return loading ? <Loader /> : <LoginComponent />
}
 
export default Login;