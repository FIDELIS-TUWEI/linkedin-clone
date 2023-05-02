import './index.scss'
import { Modal } from 'antd';

const ModalComponent = ({modalOpen, setModalOpen}) => {
    return ( 
        <>
            <Modal
                title="Create a Post"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <input 
                    className='modal-input' 
                    type="text" 
                    placeholder='What do you want to talk about?' 
                />
            </Modal>
        </>
     );
}
 
export default ModalComponent;
