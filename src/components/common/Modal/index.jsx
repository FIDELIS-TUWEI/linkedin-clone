import './index.scss'
import { Modal, Button } from 'antd';

const ModalComponent = ({modalOpen, setModalOpen, status, setStatus}) => {
    return ( 
        <>
            <Modal
                title="Create a Post"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer={[
                    <Button key="submit" type='primary' disabled={status.length > 0 ? false : true}>
                        Post
                    </Button>,
                ]}
            >
                <input 
                    className='modal-input' 
                    type="text" 
                    placeholder='What do you want to talk about?' 
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                />
            </Modal>
        </>
     );
}
 
export default ModalComponent;
