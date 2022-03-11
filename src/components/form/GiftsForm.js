import React from 'react';

import { useForm } from '../../hooks/useForm';

export const GiftsForm = ({ handleAddGift }) => {

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
  }  

  return (
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
  )
}