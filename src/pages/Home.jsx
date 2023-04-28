import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";

const Home = () => {

    // useEffect Hook
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            console.log(res?.accessToken)
        });
    }, []);
    return <HomeComponent />
}
 
export default Home;