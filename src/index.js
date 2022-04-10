import React from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    useState(counter + 1);
  }
  return (
    <div class="stylish">
      <p>{Counter}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}

const show = <counter />;

ReactDOM.render(show, document.getElementById('root'));
