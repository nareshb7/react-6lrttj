import React, { useContext } from 'react';
import { UserContext } from './ClothHome';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(UserContext);

  return (
    <div>
      <h1> Cart :</h1>
      {cartItems && cartItems.length ? (
        <div>
          <table cellPadding="10">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th> Quantity</th>
                <th>Total </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <button> - </button>
                      <span> 1 </span>
                      <button> + </button>
                    </td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Cart Is Empty</h1>
      )}
    </div>
  );
};
export default Cart;
