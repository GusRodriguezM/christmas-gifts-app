import React from 'react';

export const GiftsList = ({ id, name, quantity, handleDeleteGift }) => {
  return (
    <div>
      <li>{name} - {quantity}</li>
      <button onClick={() => handleDeleteGift(id)}>
        Delete
      </button>
    </div>
  )
}