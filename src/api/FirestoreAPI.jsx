import { firestore } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

// firestore db collection reference
let dbRef = collection(firestore, "posts");

export const StatusPost = (status) => {
    let object = {
        status: status
    }
    addDoc(dbRef, object)
    .then((res) => {
        toast.success("Document added succesfully")
    })
    .catch((err) => {
        console.log(err)
    });
}