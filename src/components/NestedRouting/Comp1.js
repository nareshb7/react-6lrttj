import React, { useState, createContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const UserContext = createContext();
export const Comp1 = () => {
  const [val, setVal] = useState('Value from Comp1');
  const [data, setData] = useState('');

  return (
    <UserContext.Provider value={val}>
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={() => setVal(data)}> Submit </button>
      </div>
      This is Comp1
      <div>
        <Link to="comp2">Go to Comp 2</Link>{' '}
      </div>
      <div>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
