import styled from 'styled-components';

const ModalBg = styled.div`
    display: flex;
    position: fixed;
    justify-item: center;
    align-content: center;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-item: center;
    align-content: center;
    padding: 20px;
`;

const Modal = ({ children, setShow, show }) => {
    const hideModal = () => {
        setShow(false);
    }
    return (
        <>
        {show && 
            (
                <ModalBg onClick={hideModal}>
                    {/*  onClick here this stops the click event from bubbling up to the parent element */}
                    <ModalBody onClick={e => e.stopPropagation()}> 
                        {children}
                        <button onClick={hideModal}>Close</button>
                    </ModalBody>
                </ModalBg>
            )
        }
        </>
    );
};

export default Modal;