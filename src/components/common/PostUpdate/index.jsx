import './index.scss'
import { useState, useMemo } from 'react';
import ModalComponent from '../Modal';
import { StatusPost, getStatus } from '../../../api/FirestoreAPI';
import PostsCard from '../PostsCard';

const PostStatus = () => {

    // state for opening modal
    const [modalOpen, setModalOpen] = useState(false);

    // state for post btn event
    const [status, setStatus] = useState("");

    // allStatus state from db
    const [allStatus, setAllstatus] = useState([])

    // send status to firebase db
    const sendStatus = async () => {
        await StatusPost(status);
        await setModalOpen(false);
        await setStatus("")
    };

    // useMemo hook to getStatus from firebase db
    useMemo(() => {
        getStatus(setAllstatus);
    }, []);

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

            {/* Map allStatus for display in the UI */}
            <div>
                {allStatus.map((posts) => {
                    return <PostsCard posts={posts} />
                })}
            </div>
        </div>
     );
}
 
export default PostStatus;