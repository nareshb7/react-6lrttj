import React from 'react';
import { INCREMENT, DECREMENT, BUYCAKE } from './ActionType';

const initialState = {
  val: 10,
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        val: state.val + 1,
      };
    case DECREMENT:
      return {
        val: state.val - 1,
      };
    default:
      return state;
  }
};

const cakeInitialState = {
  cakes: 15,
};

export const CakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUYCAKE:
      return {
        cakes: state.cakes - 1,
      };
    default:
      return state;
  }
};
