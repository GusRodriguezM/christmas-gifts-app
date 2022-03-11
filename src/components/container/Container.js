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

  /**
   * 
   * TODO: Add another restriction to avoid adding gifts with unnecessary spaces (begin, middle, end)
   *       And another restriction to prevent the user adds just blank spaces
   */
  const handleAddGift = (addGift) => {
    gifts.some(gift => gift.name.toLowerCase() === addGift.name.toLowerCase())
      ? console.log('Please, do not repeat the gift')
      : setGifts([...gifts, addGift]);

    console.log(gifts);
  } 

  const handleDeleteGift = (id) => {
    const auxGifts = gifts.filter(gift => gift.id !== id);
    setGifts(auxGifts);
  }

  const handleCleanList = () => {
    setGifts([]);
  }

  return (
    <div className='list'>
        <h1>Christmas gifts</h1>

        <GiftsForm handleAddGift={handleAddGift} />

        {
          gifts.length === 0 ? 'Please start adding gifts!' : 
          <ul>
            {
              gifts.map((gift, i) => (
                <GiftsList key={i} {...gift} handleDeleteGift={handleDeleteGift} />
              ))
            }
          </ul>
        }

        <button
          onClick={handleCleanList}
        >
          Clean the list
        </button>

    </div>
  )
}