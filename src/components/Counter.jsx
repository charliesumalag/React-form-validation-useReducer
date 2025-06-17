import React, { useState } from 'react'
import "../App.css";
const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }
    const handleDecrement = () => {
        setCount((prev) => prev - 1);
    }
  return (
    <div className='counterComponent'>
        <p>Count: {count}</p>
        <div className='btn-container'>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter
