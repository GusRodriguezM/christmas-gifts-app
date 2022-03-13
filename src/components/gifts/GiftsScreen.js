import React, { useEffect } from 'react';

import { useState } from 'react';
import { GiftsFormModal } from './GiftsFormModal';
import { GiftsList } from './GiftsList';

export const GiftsScreen = () => {

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

  //Read the localStorage when the App starts
  useEffect(() => {
    setGifts(JSON.parse(localStorage.getItem('gifts')));
  }, []);
  
  //Save the gifts list in the local storage every time the state changes
  useEffect(() => {
    localStorage.setItem('gifts', JSON.stringify(gifts) || '');
  }, [gifts]);
  
  return (
    <div className='list'>
        <h1>Christmas gifts</h1>

        <GiftsFormModal handleAddGift={handleAddGift} />

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