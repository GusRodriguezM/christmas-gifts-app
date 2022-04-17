import React, { useState, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';
import Modal from 'react-modal';
import { GiftsListToPrint } from './GiftsListToPrint';

import './VisualizeGiftsModal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

Modal.setAppElement('#root');

export const VisualizeGiftsModal = ({ gifts }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const componentRef = useRef();

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Gifts list'        
    })

    return (
        
        <div>
            
            <button 
                disabled={gifts.length === 0 ? true : false}
                className={gifts.length === 0 ? 'button-disabled' : null}
                onClick={openModal}
            >
                <span>Visualize</span>
                <i className="fa-solid fa-eye"></i>
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
                className='modal'
                overlayClassName='modal-fondo'
            >

                {/* Adding a new component with the ref to print and the list of gifts */}
                <GiftsListToPrint ref={componentRef} gifts={gifts}/>

                <div className='button-group'>
                    <button className='modal-btn' onClick={handlePrint}>
                        Print
                    </button>

                    <button className='modal-btn' onClick={closeModal}>
                        Close
                    </button>
                </div>

            </Modal>
        </div>
    )
}