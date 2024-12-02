import React from 'react';
import "./CounterApp.css";
const CounterApp = () => {
    const [count, setCount] = React.useState(0);
  return (
    <div className='disp'>
        <h1 className='header'>{count}</h1>
        <button className='btn' onClick={()=>{setCount(count+1)}}>Increment Count</button>
        <button className='btn'onClick={()=>{setCount(0)}}>Reset Button</button>
        <button className='btn' onClick={()=>{setCount(count-1)}}>Decrement Count</button>
        </div>
  );
};

export default CounterApp;