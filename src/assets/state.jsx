import React, { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);

  const newNumber = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <p>{count}</p>
      </div>

      <button className='bg-blue-100' onClick={newNumber}>Click Me</button>
    </>
  );
};






export default State;