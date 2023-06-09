import { firestore } from '../firebaseConfig';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

// firestore db collection reference
let dbRef = collection(firestore, "posts");

export const StatusPost = (object) => {
    addDoc(dbRef, object)
    .then(() => {
        toast.success("Document added succesfully")
    })
    .catch((err) => {
        console.log(err)
    });
}

// Reading posts from firebase db
export const getStatus = (setAllstatus) => {
    onSnapshot(dbRef, (response) => {
        setAllstatus(response.docs.map((docs) => {
            return { ...docs.data(), id : docs.id }
        }));
    });
}