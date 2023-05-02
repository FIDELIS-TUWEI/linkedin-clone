import './index.scss'
import { Modal } from 'antd';

const ModalComponent = ({modalOpen, setModalOpen}) => {
    return ( 
        <>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <p>Some content</p>
                <p>Some content</p>
                <p>Some content</p>
            </Modal>
        </>
     );
}
 
export default ModalComponent;
