import React from 'react';

import './GiftsList.css'

export const GiftsList = ({ id, name, quantity, image, handleDeleteGift }) => {
  return (
    <div className='gift'>
      
      <img alt={name} src={image} />
      
      <div className='gift-info'>
        <span>{name}</span>
        <span>{quantity}</span>
      </div>

      <button onClick={() => handleDeleteGift(id)}>
        Delete
      </button>

    </div>
  )
}