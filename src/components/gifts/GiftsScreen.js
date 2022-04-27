import React, { useEffect, useState } from 'react';

import { apiGifts } from '../../helpers/apiGifts';
import { GiftsList } from './GiftsList';
import { GiftsForm } from './GiftsForm';
import { VisualizeGiftsModal } from './VisualizeGiftsModal';

import './GiftsScreen.css';
import { EmptyList } from './EmptyList';

export const GiftsScreen = () => {

  const [gifts, setGifts] = useState([]);
  const [reduced, setReduced] = useState(0);

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

  const handleEditGift = (editGift) => {
    let newList = gifts.map(gift => gift.id === editGift.id ? editGift : gift );
    setGifts(newList);
  }

  const handleDeleteGift = (id) => {
    const auxGifts = gifts.filter(gift => gift.id !== id);
    setGifts(auxGifts);
  }

  /**
   * 
   * TODO: It's necessary to diable some fields to add a duplcated gift? 
   */

  const handleDuplicateGift = (duplicateGift) => {
    //Spread the content of the list
    const duplicateGifts = [...gifts];

    //Find an index of the gift to duplicate
    const idx = duplicateGifts.findIndex(duplicate => duplicate.id === duplicateGift.id);

    //Change the id of the new and fresh gift
    duplicateGift.id = (+new Date()).toString();
    
    //Add the gift into the id plus 1 of the duplicated gift
    duplicateGifts.splice(idx + 1, 0, duplicateGift);

    //Set the new list of gifts
    setGifts(duplicateGifts);
  }

  const handleCleanList = () => {
    setGifts([]);
  }

  //Read the localStorage when the App starts
  useEffect(() => {
    apiGifts.getGifts()
      .then(gifts => setGifts(gifts.data))
      .catch(console.log)
      .finally();
  }, []);
  
  //Save the gifts list in the local storage every time the state changes
  useEffect(() => {
    apiGifts.saveGifts(gifts)
      .then(console.log)
      .catch(console.log);
  }, [gifts]);

  useEffect(() => {

    let subtotals = [];

    if(gifts.length !== 0){
      gifts.map(gift => subtotals.push(gift.total));
      setReduced( subtotals.reduce((previousValue, currentValue) => previousValue + currentValue) );
    }else{
      setReduced(0);
    }
  }, [gifts]);
  
  return (
    <div className='content'>
        <h1>Christmas gifts</h1>

        <GiftsForm handleAddGift={handleAddGift} option={'add'} />

        {
          <>
            {gifts.length === 0 ? (<EmptyList />) : 
            <div className='list'>
              {
                gifts.map((gift, i) => (
                  <GiftsList
                    key={i} 
                    {...gift}
                    gifts={gifts}
                    handleEditGift={handleEditGift}
                    handleDeleteGift={handleDeleteGift}
                    handleDuplicateGift={handleDuplicateGift}
                  />
                ))
              }
            </div>}

            <div className='total'>
              {
                `Total: ${reduced}`
              }
            </div>
          </>
        }

        <div className='clean-visualize'>
          <button 
            disabled={gifts.length === 0 ? true : false}
            className={gifts.length === 0 ? 'button-disabled' : null}
            onClick={handleCleanList}
          >
            <span>Delete all</span>
            <i className="fa-solid fa-dumpster"></i>
          </button>

          <VisualizeGiftsModal gifts={gifts} />
        </div>

    </div>
  )
}