import { useState } from 'react';

import { useForm } from './hooks/useForm';

import './App.css';

function App() {

  const [gifts, setGifts] = useState([
    // {name: 'socks'},
    // {name: 'ugly sweater'},
    // {name: 'Santa\'s hat'},
    // {name: 'snow sled'},
    // {name: 'snowball gun'},
  ]);

  const [formValues, handleInputChange, reset] = useForm({
    name: ''
  });

  const { name } = formValues;

  const handleAddGift = (e) => {
    e.preventDefault(); 
    setGifts([...gifts, formValues]);
    reset();
  }

  const handleDeleteGift = (i) => {
    const auxGifts = gifts.filter((gift,idx) => idx !== i);
    setGifts(auxGifts);
  }

  return (
    <div className="App">
      <div className='list'>
        <h1>Christmas gifts</h1>

        <form onSubmit={handleAddGift}>
          <input 
            type='text'
            placeholder='Your gift'
            name='name'
            value={name}
            autoComplete='off'
            onChange={handleInputChange}
          />

          <button
            type='submit'
          >
            Add a gift
          </button>
        </form>
        <ul>
          {
            gifts.map((gift, i) => (
              <div key={i}>
                <li>{gift.name}</li>
                <button onClick={() => handleDeleteGift(i)}>
                  Delete
                </button>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;