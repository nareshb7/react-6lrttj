import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';
import ExRedux from './ExRedux';
import CakeCounter from './CakeCounter';

const ReduxExample = () => {
  return (
    <Provider store={store}>
      <ExRedux />
      <CakeCounter />
    </Provider>
  );
};
export default ReduxExample;
