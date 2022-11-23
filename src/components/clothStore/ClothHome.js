import React, { useState, createContext } from 'react';

import Cart from './Cart';
import { data } from './data.js';
import MainComp from './MainComp';
import AllItems from './AllItems';

export const UserContext = createContext();

const ClothHome = () => {
  const [cartItems, setCartItems] = useState([]);
  const [sltData, setSltData] = useState([]);
  const value = { cartItems, setCartItems };

  const handleChange = (e) => {
    e.target.value === 'all'
      ? setSltData([])
      : setSltData(data[e.target.value]);
  };
  const handleClick = () => {
    alert(`You just ordered ${item.title}`);
    setCartItems([...cartItems, item]);
  };

  const options = [
    { value: 'all', name: 'All Models' },
    { value: 'kids', name: 'Kids Clothing' },
    { value: 'men', name: "Men's Clothing" },
    { value: 'women', name: "Women's Clothing" },
  ];

  return (
    <UserContext.Provider value={value}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '70%', display: 'inline-block' }}>
          <select onChange={handleChange} defaultValue={'all'}>
            {options.map((val, idx) => {
              return (
                <option value={val.value} key={idx}>
                  {val.name}
                </option>
              );
            })}
          </select>
          {sltData?.length ? (
            <MainComp data={sltData} handleClick={handleClick} />
          ) : (
            <AllItems handleClick={handleClick} />
          )}
        </div>
        <div style={{ width: '30%', display: 'inline-block' }}>
          <Cart />
        </div>
      </div>
    </UserContext.Provider>
  );
};
export default ClothHome;
