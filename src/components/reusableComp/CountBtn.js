import React from 'react';

const CountBtn = ({ countFunc }) => {

  return (
    <div>
      <button onClick={countFunc}>Click me </button>
    </div>
  );
};
export default CountBtn;
