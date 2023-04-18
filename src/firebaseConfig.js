// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWauFnQpJY1pdI8Fqxk9w3U-x_JDvisXo",
  authDomain: "linkedin-clone-c71ee.firebaseapp.com",
  projectId: "linkedin-clone-c71ee",
  storageBucket: "linkedin-clone-c71ee.appspot.com",
  messagingSenderId: "20383771721",
  appId: "1:20383771721:web:4e653343ca5f8c65e22398",
  measurementId: "G-E3GDWFVCDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);