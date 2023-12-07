// Gadget.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gad1 from './Images/gad1.webp';
import gad2 from './Images/gad2.webp';
import gad3 from './Images/gad3.webp';
import gad4 from './Images/gad4.webp';
import gad5 from './Images/gad5.webp';
import gad6 from './Images/gad6.webp';
import gad7 from './Images/gad7.webp';
import gad8 from './Images/gad8.webp';
import gad9 from './Images/gad9.webp';
import gad10 from './Images/gad10.webp';
import gad11 from './Images/gad11.webp';
import gad12 from './Images/gad12.webp';
import './Gadget.css';

// Placeholder data for products
const products = [
  { id: 1, name: 'Vivo 5g', price: '₹25,000', image: gad1 },
  { id: 2, name: 'Vivo 5g with black', price: '₹28,000', image: gad2 },
  { id: 3, name: 'Redmi 12C', price: '₹23,000', image: gad3 },
  { id: 4, name: 'AA', price: '₹18,000', image: gad4 },
  { id: 5, name: 'Zebronics', price: '₹35,000', image: gad5 },
  { id: 6, name: 'Acer', price: '₹40,000', image: gad6 },
  { id: 7, name: 'HP', price: '₹58,000', image: gad7 },
  { id: 8, name: 'HP Folding', price: '₹87,000', image: gad8 },
  { id: 9, name: 'Smart watch', price: '₹9,000', image: gad9 },
  { id: 10, name: 'Smart watch with ash', price: '₹7,000', image: gad10 },
  { id: 11, name: 'Smart watch with black', price: '₹5,000', image: gad11 },
  { id: 12, name: 'Smart Watch with black', price: '₹10,00', image: gad12 },
  // Add more products as needed
];

const Gadget = () => {
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
          {/* <p>Total: ₹{calculateTotal()}</p> */}
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

export default Gadget;
