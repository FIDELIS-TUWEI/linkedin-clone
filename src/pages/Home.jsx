import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

const Home = () => {

    // state hook for loading spinner
    const [loading, setLoading] = useState(true)

    // navigate hook
    let navigate = useNavigate();

    // useEffect Hook
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(!res?.accessToken) {
                navigate("/")
            }
            else {
                setLoading(false)
            }
        });
    }, []);
    return loading ? <Loader /> : <HomeComponent />
}
 
export default Home;