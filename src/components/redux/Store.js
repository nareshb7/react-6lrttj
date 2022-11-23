import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Reducer, CakeReducer } from './Reducer';

export const store = configureStore({
  reducer: {
    count: Reducer,
    cake: CakeReducer,
  },
});
