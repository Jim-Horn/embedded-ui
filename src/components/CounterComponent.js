import React from 'react';

const CounterComponent = ({ incrementCount, decrementCount, resetCount }) => (
  <div id="counter-component">
    <button onClick={decrementCount}>-</button>
    <button onClick={resetCount}>Reset</button>
    <button onClick={incrementCount}>+</button>
  </div>
);

export default CounterComponent;
