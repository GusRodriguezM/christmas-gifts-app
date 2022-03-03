import './App.css';

function App() {

  const gifts = [
    {id: 1, name: 'socks'},
    {id: 2, name: 'ugly sweater'},
    {id: 3, name: 'Santa\'s hat'},
    {id: 4, name: 'snow sled'},
    {id: 5, name: 'snowball gun'},
  ];

  return (
    <div className="App">
      <div className='list'>
        <h1>Christmas gifts</h1>
        <ul>
          {
            gifts.map((gift) => (
              <li>{gift.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;