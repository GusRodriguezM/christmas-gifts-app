import React from 'react';

export const GiftsList = ({ id, name, handleDeleteGift }) => {
  return (
    <div>
      <li>{name}</li>
      <button onClick={() => handleDeleteGift(id)}>
        Delete
      </button>
    </div>
  )
}