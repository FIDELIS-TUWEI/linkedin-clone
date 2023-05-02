import './index.scss'
import { useState } from 'react';
import ModalComponent from '../Modal';

const PostStatus = () => {

    // state for opening modal
    const [modalOpen, setModalOpen] = useState(false);

    return ( 
        <div className='post-status-main'>
            <div className="post-status">
                <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a Post</button>
            </div>

            {/* Modal Component rendered */}
            <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
     );
}
 
export default PostStatus;