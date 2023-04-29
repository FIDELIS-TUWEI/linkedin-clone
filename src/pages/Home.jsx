import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

const Home = () => {

    // navigate hook
    let navigate = useNavigate();

    // useEffect Hook
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(!res?.accessToken) {
                navigate("/")
            }
            else {
                return <Loader />
            }
        });
    }, []);
    return <HomeComponent />
}
 
export default Home;