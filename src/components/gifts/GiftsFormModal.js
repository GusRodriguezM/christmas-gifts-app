import React, { useState } from 'react';

import Modal from 'react-modal';

import { useForm } from '../../hooks/useForm';

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

export const GiftsFormModal = ({ handleAddGift }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        quantity: '',
        imageUrl: ''
    });
    
    const { name, quantity, imageUrl } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddGift({id: (+new Date()).toString(), name: name, image: imageUrl, quantity: quantity});
        reset();
        closeModal();
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>
                Add a gift
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
            >

                <form onSubmit={handleSubmit}>

                    <input 
                    type='text'
                    placeholder='Your gift'
                    name='name'
                    value={name}
                    autoComplete='off'
                    onChange={handleInputChange}
                    />

                    <input 
                    type='text'
                    placeholder='https://your-image'
                    name='imageUrl'
                    value={imageUrl}
                    onChange={handleInputChange}
                    />

                    <input 
                    type='number'
                    name='quantity'
                    value={quantity}
                    autoComplete='off'
                    min={1}
                    max={100}
                    minLength={1}
                    maxLength={3}
                    required
                    onChange={handleInputChange}
                    />

                    <button
                    type='submit'
                    disabled={name === '' ? true : false}
                    >
                    Add a gift
                    </button>

                </form>
                

                <button onClick={closeModal}>
                    Close
                </button>

            </Modal>
        </div>
    )
}