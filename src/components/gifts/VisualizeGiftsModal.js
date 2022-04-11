import React, { useState } from 'react';

import Modal from 'react-modal';

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

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        
        <div>
            
            <button 
                disabled={gifts.length === 0 ? true : false}
                className={gifts.length === 0 ? 'button-disabled' : null}
                onClick={openModal}
            >
                Visualize
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
                className='modal'
                overlayClassName='modal-fondo'
            >

                <>
                    {/* <h2>Your list</h2> */}

                    {
                        gifts.map((gift, i) => (
                            <div className='main' key={i}>
                                <img className='gift-image' alt={gift.name} src={gift.image} />

                                <div className='info'>
                                    <span>{gift.name} ({gift.quantity})</span>
                                    <span>{gift.person}</span>
                                </div>
                            </div>
                        ))
                    }
                </>

                <div className='button-group'>
                    <button className='modal-btn'>
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