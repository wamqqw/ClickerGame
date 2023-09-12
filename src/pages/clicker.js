import React, { useState } from 'react';
import './ClickerGame.css';


function ClickerGame() {
    const [count, setCount] = useState(0); 
    const [amount, setAmount] = useState(1); 

    //
    const handleClick = () => {
      setCount(count + amount);
    };

    const buyUpgrade = () => {
      if (count >= 10) { 
        setCount(count - 10); 
        setAmount(amount + 1); 
      } else {
        alert('Not enough points to buy upgrades!');
      }
    };
  
    return (
      <div>
        <h1>ClickerGame</h1>
        <p>Clicks : {count}</p>
        <p>Level click: {amount}</p>
        <button onClick={handleClick}>Click me!</button>
        <button onClick={buyUpgrade}>Upgrade (10 points)</button>
      </div>
    );
  }
  
export default ClickerGame;