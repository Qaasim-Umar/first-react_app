import React, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"

function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div id="stylish">
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}

const show = <Counter />;

ReactDOM.render(show, document.getElementById('root'));
