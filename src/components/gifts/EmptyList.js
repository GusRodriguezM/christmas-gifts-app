import React from 'react';

import './EmptyList.css';

export const EmptyList = () => {
  return (
    <div className='empty-list'>
      <span>Your list is empty</span>
      <i className="fa-solid fa-face-sad-tear"></i>
    </div>
  )
}