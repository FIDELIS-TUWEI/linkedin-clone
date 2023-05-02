import { firestore } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

// firestore db collection reference
let dbRef = collection(firestore, "posts");

export const StatusPost = (status) => {
    let object = {
        status: status
    }
    addDoc(dbRef, object)
    .then((res) => {
        console.log("Document added succesfully")
    })
    .catch((err) => {
        console.log(err)
    });
}