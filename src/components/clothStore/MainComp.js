import React from 'react';
import ItemCard from './ItemCard ';

const MainComp = ({ data }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {data.map((item, idx) => {
          return <ItemCard item={item} idx={idx} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default MainComp;
