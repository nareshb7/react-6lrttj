import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BuyCake } from './Action';

const CakeCounter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cake.cakes);
  const [psd, setPsd] = useState('');
  const ClickFun = () => {
    if (state > 0) {
      dispatch(BuyCake());
    } else {
      alert('Out of Stock');
    }
  };
  const randomPsdFunc = () => {
    setPsd(Math.random().toString(36).slice(2, 10));
  };
  return (
    <div className="m-5">
      <h1>Cake Counter : </h1>
      <div>
        <h3>No of Cakes : {state}</h3>
        <button onClick={ClickFun}>Buy Cake</button>
      </div>
      <div className="m-5">
        <h4>Random Passowrd: </h4>
        <button onClick={randomPsdFunc}>Click Here</button>
        <h3 className="p-3">
          Password is : <span style={{ color: '#f00' }}>{psd}</span>
        </h3>
      </div>
    </div>
  );
};
export default CakeCounter;
