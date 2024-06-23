import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);

  const fetchRandomName = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0].name.first;
  };

  const handleButtonClick = async () => {
    const newName = await fetchRandomName();
    setCards([...cards, { name: newName, number: count + 1 }]);
    setCount(count + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h4>Dynamic Card List</h4>
      <button onClick={handleButtonClick}>Add Card</button>
      <div style={{ marginTop: 10 }}>
        {cards.map((card, index) => (
          <Card key={index} number={card.number} name={card.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
