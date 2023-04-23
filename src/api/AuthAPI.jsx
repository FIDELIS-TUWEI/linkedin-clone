import { 
    signInWithEmailAndPassword, 
    getAuth, createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebaseConfig'


// login with email and password
export const LoginAPI = (email, password) => {
    try {
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch (err) {
        return err;
    }
};

// create user with email and password
export const RegisterAPI = (email, password) => {
    try {
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch (err) {
        return err;
    }
}

// signin with google
export const GoogleSignInAPI = () => {
    try {
        let googleProvider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, googleProvider);
        return res;
    }
    catch (err) {
        return err;
    }
}