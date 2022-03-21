import React, { useState } from 'react';

import Modal from 'react-modal';

import './GiftsFormModal.css';

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

export const GiftsEditFormModal = ({ id, handleEditGift, gifts }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        quantity: '',
        price: '',
        image: '',
        person: ''
    });
    
    const { name, quantity, price, image, person } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditGift(
            {
                id: id,
                name: name,
                image: image,
                quantity: quantity,
                price: price,
                person: person,
                total: quantity * price
            }
        );
        closeModal();
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const openModal = () => {
        setModalIsOpen(true);
        const giftToEdit = gifts.filter(gift => gift.id === id);
        setFormValues(giftToEdit[0]);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        
        <div>
            <button onClick={openModal}>
                Edit
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
                className='modal'
                overlayClassName='modal-fondo'
            >

                <form className='container' onSubmit={handleSubmit}>

                    <input 
                        type='text'
                        placeholder='Your gift'
                        name='name'
                        value={name}
                        autoComplete='off'
                        onChange={handleInputChange}
                    />

                    <input
                        type='number'
                        name='price'
                        placeholder='Price'
                        value={price}
                        autoComplete='off'
                        min={1}
                        max={9999}
                        minLength={1}
                        maxLength={3}
                        required
                        onChange={handleInputChange}
                    />

                    <input 
                        type='text'
                        placeholder='https://your-image'
                        name='image'
                        value={image || ''}
                        onChange={handleInputChange}
                    />

                    <input 
                        type='text'
                        placeholder='To [name]'
                        name='person'
                        value={person}
                        onChange={handleInputChange}
                    />

                    <input 
                        type='number'
                        placeholder='Quantity'
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

                    <div className='button-group'>
                        <button
                            type='submit'
                            disabled={name === '' ? true : false}
                        >
                            Save
                        </button>

                        <button onClick={closeModal}>
                            Close
                        </button>
                    </div>

                </form>
            </Modal>
        </div>
    )
}