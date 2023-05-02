import './index.scss'
import { useState } from 'react';
import ModalComponent from '../Modal';
import { StatusPost } from '../../../api/FirestoreAPI';

const PostStatus = () => {

    // state for opening modal
    const [modalOpen, setModalOpen] = useState(false);

    // state for post btn event
    const [status, setStatus] = useState("");

    // send status to firebase db
    const sendStatus = async () => {
        await StatusPost(status);
        await setModalOpen(false);
        await setStatus("")
    };

    return ( 
        <div className='post-status-main'>
            <div className="post-status">
                <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a Post</button>
            </div>

            {/* Modal Component rendered */}
            <ModalComponent 
                status={status}
                setStatus={setStatus} 
                modalOpen={modalOpen} 
                setModalOpen={setModalOpen} 
                sendStatus={sendStatus}
            />
        </div>
     );
}
 
export default PostStatus;