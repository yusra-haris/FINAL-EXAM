import React, { useState } from 'react';
import './App.css';
import ProductsDetails from './Pages/MainPage';  // Import MainPage for product details
import Cart from './Components/Addcart';  // Import Addcart for cart page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router
import Navbar from './Components/Navbar';
import ThankYouPage from './Pages/Thankyou';  // Import ThankYouPage

function App() {
  const [cart, setCart] = useState([]);  // State to store cart items

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove product from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((item, i) => i !== index));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);  // Resets the cart to an empty array
  };

  // Proceed to Checkout logic
  const proceedToCheckout = (navigate) => {
    setCart([]);  // Clear the cart
    navigate('/thank-you');  // Redirect to thank-you page
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsDetails addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              proceedToCheckout={proceedToCheckout}
            />
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
