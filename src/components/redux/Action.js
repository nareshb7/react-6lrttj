import React from 'react';
import { INCREMENT, DECREMENT, BUYCAKE } from './ActionType';

export const IncrementAction = () => {
  return {
    type: INCREMENT,
  };
};
export const DecrementAction = () => {
  return {
    type: DECREMENT,
  };
};

export const BuyCake = () => {
  return {
    type: BUYCAKE,
  };
};
