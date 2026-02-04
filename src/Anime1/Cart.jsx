import React, { useContext } from 'react';
import { DataContext } from '../Common';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useContext(DataContext);
  const navigate = useNavigate();


  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Your cart is empty.</h2>;
  }
 
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div id='all'>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.size || 'N/A'}</td>
              <td>${item.price}</td>
              <td id='remove'>
                <button id='click' onClick={() => removeFromCart(item.name)}>Remove</button>
                <button id="click1" onClick={() => navigate("/buy", { state: { product: { name: item.name, 
                  size: item.size || "N/A", price: item.price, img: item.img }  } })}> BUY </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: ${total}</h2>
      </div>
    </div>
  );
}
