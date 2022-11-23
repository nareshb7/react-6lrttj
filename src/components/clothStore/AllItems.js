import React from 'react';
import { data } from './data.js';
import ItemCard from './ItemCard';

const AllItems = ({ handleClick }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {Object.values(data).map((val) =>
          val.map((item, idx) => (
            <ItemCard
              item={item}
              idx={idx}
              key={idx}
              handleClick={handleClick}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default AllItems;
