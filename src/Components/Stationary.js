// Stationary.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import stat1 from './Images/stat1.webp';
import stat2 from './Images/stat2.webp';
import stat3 from './Images/stat3.webp';
import stat4 from './Images/stat4.webp';
import stat5 from './Images/stat5.webp';
import stat6 from './Images/stat6.webp';
import stat7 from './Images/stat7.webp';
import stat8 from './Images/stat8.webp';
import stat9 from './Images/stat9.webp';
import stat10 from './Images/stat10.webp';
import stat11 from './Images/stat11.webp';
import stat12 from './Images/stat12.webp';
import './Gadget.css';

// Placeholder data for products
const products = [
  { id: 1, name: 'CASIO Calc', price: '₹750', image: stat1 },
  { id: 2, name: 'scissor', price: '₹300', image: stat2 },
  { id: 3, name: 'Stabler', price: '₹800', image: stat3 },
  { id: 4, name: 'Pin', price: '₹90', image: stat4 },
  { id: 5, name: 'Pencil box', price: '₹100', image: stat5 },
  { id: 6, name: 'Pencils', price: '₹200', image: stat6 },
  { id: 7, name: 'Modern Pencils', price: '₹300', image: stat7 },
  { id: 8, name: 'Markers', price: '₹900', image: stat8 },
  { id: 9, name: 'Marker with Pens', price: '₹200', image: stat9 },
  { id: 10, name: 'Highlighters', price: '₹100', image: stat10 },
  { id: 11, name: 'Highlighters with light color', price: '₹150', image: stat11 },
  { id: 12, name: 'Parker', price: '₹230', image: stat12 },
  // Add more products as needed
];

const Stationary = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  // const navigate = useNavigate(); // eslint-disable-line

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '')) * item.quantity, 0);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="gadture-container">
      {products.map((product) => (
        <div key={product.id} className="gadture-card">
          <img src={product.image} alt={product.name} className="gadture-image" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      ))}

      {showCart && (
        <div className="shopping-cart">
          <h2>Your Shopping Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          {/* <p>Total: ₹{calculateTotal().toFixed(2)}</p> */}
          <button onClick={handleCloseCart}>Close Cart</button>
        </div>
      )}

      <button onClick={handleOpenCart} className="open-cart-button">
        Open Cart
      </button>
      <Link to="/addToCart" className="view-cart-link">
        View Cart
      </Link>
    </div>
  );
};

export default Stationary;
