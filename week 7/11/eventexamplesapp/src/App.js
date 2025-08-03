import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert('Hello! This is the increment action');
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = (event) => {
    event.preventDefault();
    alert('I was clicked');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Event Handling in React</h2>

      <h3>Counter: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>

      <br /><br />

      <button onClick={handleSyntheticEvent}>OnPress</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
