import React, { useState } from 'react';

import Modal from 'react-modal';

import { defaultGifts } from '../../helpers/defaultGifts';

import './GiftsForm.css';

Modal.setAppElement('#root');

export const GiftsForm = ({ id, handleAddGift, handleEditGift, handleDuplicateGift, gifts, option }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    let staticValues = {
        name: '',
        quantity: '',
        price: '',
        image: '',
        person: ''
    }

    const [formValues, setFormValues] = useState(staticValues);
    
    const { name, quantity, price, image, person } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(option === 'add'){
            handleAddGift(
                {
                    id: (+new Date()).toString(),
                    name: name,
                    image: image,
                    quantity: quantity,
                    price: price,
                    person: person,
                    total: quantity * price
                }
            );
            closeModal();
        }else if(option === 'edit'){
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
        }else if(option === 'duplicate'){
            handleDuplicateGift(
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
        }else{
            closeModal();
        }
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    /**
     * TODO: Add the complete gift? (name, image, person, quantity)
     */
    const handleGetRandomGift = () => {
        const rand = Math.floor(Math.random() * defaultGifts.length);
        const randomGift = defaultGifts[rand];
        setFormValues({...formValues, name: randomGift.name});
    }

    const openModal = () => {
        setModalIsOpen(true);

        if(option === 'edit' || option === 'duplicate'){
            const giftToEdit = gifts.filter(gift => gift.id === id);
            setFormValues(giftToEdit[0]);
        }
    }

    const closeModal = () => {
        setModalIsOpen(false);
        setFormValues(staticValues);
    }

    return (
        
        <div>

            {
                option === 'add' ? (
                    <button onClick={openModal}>
                        <span>Add a gift</span>
                        <i className="fa-solid fa-circle-plus"></i>
                    </button>
                ) : option === 'edit' ? (
                    <button onClick={openModal}>
                        <span>Edit</span>
                        <i className='fa-solid fa-pen-to-square'></i>
                    </button>
                ) : option === 'duplicate' ? (
                    <button onClick={openModal}>
                        <span>Duplicate</span>
                        <i className="fa-solid fa-copy"></i>
                    </button>
                ) : null
            }

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Example Modal'
                className='modal'
                overlayClassName='modal-fondo'
            >

                <form className='container-form' onSubmit={handleSubmit}>

                    <input 
                        type='text'
                        placeholder='Your gift'
                        name='name'
                        value={name}
                        autoComplete='off'
                        onChange={handleInputChange}
                    />

                    <button onClick={handleGetRandomGift}>
                        <span>Surprise Me!</span>
                        <i className="fa-solid fa-shuffle"></i>
                    </button>

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
                        value={image}
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
                            <span>Save</span>
                            <i className="fa-solid fa-floppy-disk"></i>
                        </button>

                        <button onClick={closeModal}>
                            <span>Close</span>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                    </div>

                </form>
            </Modal>
        </div>
    )
}