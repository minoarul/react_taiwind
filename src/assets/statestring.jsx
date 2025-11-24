import React, { useState } from 'react';

const StateString = () => {
  const [count, setCount] = useState("this is state");

  const newNumber = () => {
    setCount();
  };

  return (
    <div>
      <p>{count}</p>

      <button onClick={newNumber}>
        click me
      </button>
    </div>
  );
};

export default StateString;
