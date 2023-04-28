import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {

    // navigate hook
    let navigate = useNavigate();

    // useEffect Hook
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(!res?.accessToken) {
                navigate("/")
            }
        });
    }, []);
    return <HomeComponent />
}
 
export default Home;