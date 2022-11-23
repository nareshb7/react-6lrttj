import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncrementAction, DecrementAction } from './Action';

const ExRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.count.val);
  const Decrease = () => {
    if (state > 0) {
      dispatch(DecrementAction());
    }
  };

  const Increase = () => {
    dispatch(IncrementAction());
  };
  return (
    <div className="m-5">
      <h1>Val Counter : </h1>
      <button onClick={Increase}> Increase </button>
      <h1> {state} </h1>
      <button onClick={Decrease}> Decrease </button>
    </div>
  );
};
export default ExRedux;
