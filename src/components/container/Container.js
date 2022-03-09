import React from 'react';

import { useState } from 'react';
import { GiftsForm } from '../form/GiftsForm';
import { GiftsList } from '../gift/GiftsList';

export const Container = () => {

  const [gifts, setGifts] = useState([
    // {id: 1, name: 'socks'},
    // {id: 2, name: 'ugly sweater'},
    // {id: 3, name: 'Santa\'s hat'},
    // {id: 4, name: 'snow sled'},
    // {id: 5, name: 'snowball gun'},
  ]);

  const handleAddGift = (addGift) => {
    console.log(addGift);
    setGifts([...gifts, addGift]);
  }

  const handleDeleteGift = (id) => {
    const auxGifts = gifts.filter(gift => gift.id !== id);
    setGifts(auxGifts);
  }

  return (
    <div className='list'>
        <h1>Christmas gifts</h1>

        <GiftsForm handleAddGift={handleAddGift} />

        <ul>
          {
            gifts.map((gift, i) => (
              <GiftsList key={i} {...gift} handleDeleteGift={handleDeleteGift} />
            ))
          }
        </ul>

    </div>
  )
}