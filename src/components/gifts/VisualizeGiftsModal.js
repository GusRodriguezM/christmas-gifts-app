import React, { useState, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';
import Modal from 'react-modal';
import { GiftsListToPrint } from './GiftsListToPrint';

import './VisualizeGiftsModal.css';

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
                contentLabel='Example Modal'
                className='modal'
                overlayClassName='modal-fondo'
            >

                {/* Adding a new component with the ref to print and the list of gifts */}
                <GiftsListToPrint ref={componentRef} gifts={gifts}/>

                <div className='button-group'>
                    <button className='modal-btn' onClick={handlePrint}>
                        <span>Print</span>
                        <i className="fa-solid fa-print"></i>
                    </button>

                    <button className='modal-btn' onClick={closeModal}>
                        <span>Close</span>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                </div>

            </Modal>
        </div>
    )
}