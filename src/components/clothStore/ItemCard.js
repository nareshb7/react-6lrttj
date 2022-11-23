import React from 'react';

const ItemCard = ({ item, handleClick }) => {
  return (
    <div style={{ display: 'inline-block', width: '30%', margin: '10px' }}>
      <div style={{ height: '300px' }}>
        <img src={item.img} alt="Image" width="100%" height="100%" />
      </div>
      <h3>Title : {item.title}</h3>
      <h4>Price : {item.price}</h4>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
};
export default ItemCard;
