import React from 'react';
import { GiftsEditFormModal } from './GiftsEditFormModal';

import './GiftsList.css'

export const GiftsList = ({ id, name, quantity, price, image, person, handleEditGift, handleDeleteGift, gifts }) => {
  return (
    <div className='gift'>
      
      <img alt={name} src={image} />
      
      <div className='gift-info'>
        <span>{name}</span>
        <span className='qty-price'>({quantity}) - {quantity * price}</span>
        <span>{person}</span>
      </div>

      <GiftsEditFormModal handleEditGift={handleEditGift} id={id} gifts={gifts} />

      <button onClick={() => handleDeleteGift(id)}>
        Delete
      </button>

    </div>
  )
}