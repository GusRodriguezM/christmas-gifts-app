import React from 'react';

import { useForm } from '../../hooks/useForm';

export const GiftsForm = ({ handleAddGift }) => {

  const [formValues, handleInputChange, reset] = useForm({
    name: ''
  });

  const { name } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGift({id: (+new Date()).toString(), name: name});
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

        <button
          type='submit'
        >
          Add a gift
        </button>
    </form>
  )
}