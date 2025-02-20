import React from 'react';
import './Addcart.css';  // Add necessary styles for cart page
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const navigate = useNavigate();  // Directly use useNavigate here

  // Proceed to Checkout handler
  const handleProceedToCheckout = () => {
    clearCart();  // Optionally clear cart before proceeding to checkout
    navigate('/thank-you');  // Navigate to the thank-you page
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-shopping-cart-convenient-icon-png-image_4637407.jpg" alt="Empty Cart" className="empty-cart-image" />
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item-container">
                <div className="cart-item">
                  <img className="cart-item-image" src={item.image || ''} alt={item.name} />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="remove-from-cart-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
          </div>
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          <button className="checkout-btn" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
