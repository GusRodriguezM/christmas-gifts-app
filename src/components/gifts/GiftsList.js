import React from 'react';

import { GiftsForm } from './GiftsForm';

import './GiftsList.css'

export const GiftsList = ({ id, name, quantity, price, image, person, handleEditGift, handleDeleteGift, handleDuplicateGift, gifts }) => {
  return (
    <div className='gift'>
      
      <img alt={name} src={image} />
      
      <div className='gift-info'>
        <span>{name}</span>
        <span>({quantity}) - {quantity * price}</span>
        <span>{person}</span>
      </div>

      <div className='button-container'>
        <GiftsForm id={id} handleEditGift={handleEditGift} gifts={gifts} option={'edit'} />

        <GiftsForm id={id} handleDuplicateGift={handleDuplicateGift} gifts={gifts} option={'duplicate'} />

        <button onClick={() => handleDeleteGift(id)}>
          <span>Delete</span>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>

    </div>
  )
}