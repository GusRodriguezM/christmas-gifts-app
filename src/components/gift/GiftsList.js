import React from 'react';

export const GiftsList = ({ id, name, quantity, image, handleDeleteGift }) => {
  return (
    <div>
      <div>
        <img style={{height: '100px', width: '100px'}} alt={name} src={image} />
      </div>
      <li>{name} - {quantity}</li>
      <button onClick={() => handleDeleteGift(id)}>
        Delete
      </button>
    </div>
  )
}