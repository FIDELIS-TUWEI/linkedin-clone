import { firestore } from '../firebaseConfig';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

// firestore db collection reference
let dbRef = collection(firestore, "posts");

export const StatusPost = (status) => {
    let object = {
        status: status
    }
    addDoc(dbRef, object)
    .then(() => {
        toast.success("Document added succesfully")
    })
    .catch((err) => {
        console.log(err)
    });
}

// Reading posts from firebase db
export const getStatus = () => {
    onSnapshot(dbRef, (response) => {
        console.log(response.docs.map((docs) => {
            return { ...docs.data(), id : docs.id }
        }));
    });
}