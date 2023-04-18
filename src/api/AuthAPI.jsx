import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../firebaseConfig'

export const LoginAPI = (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
        return err;
    }
};