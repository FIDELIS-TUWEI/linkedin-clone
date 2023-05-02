import './index.scss'
import { Modal, Button } from 'antd';

const ModalComponent = ({modalOpen, setModalOpen, setStatus}) => {
    return ( 
        <>
            <Modal
                title="Create a Post"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer={[
                    <Button key="submit" type='primary' disabled>
                        Post
                    </Button>,
                ]}
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
