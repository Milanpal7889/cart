import React from 'react';
import useLocalStorage from '../UseLocalStorage'; // Correct import path for useLocalStorage hook

const Cart = () => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Cart</h1>
      
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h2>{item.title} - {item.price}</h2>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      
      {cart.length > 0 && (
        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
      )}
    </div>
  );
}

export default Cart;
