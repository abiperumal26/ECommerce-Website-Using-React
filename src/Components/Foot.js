// Foot.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import slip1 from './Images/slip1.webp';
import slip2 from './Images/slip2.webp';
import slip3 from './Images/slip3.webp';
import slip4 from './Images/slip4.webp';
import slip5 from './Images/slip5.webp';
import slip6 from './Images/slip6.webp';
import slip7 from './Images/slip7.webp';
import slip8 from './Images/slip8.webp';
import slip9 from './Images/slip9.webp';
import slip10 from './Images/slip10.webp';
import slip11 from './Images/slip11.webp';
import slip12 from './Images/slip12.webp';
import './Gadget.css';

// Placeholder data for products
const products = [
  { id: 1, name: 'Flat Wear', price: '₹500', image: slip1 },
  { id: 2, name: 'Leather Flat', price: '₹900', image: slip2 },
  { id: 3, name: 'Modern Flat', price: '₹700', image: slip3 },
  { id: 4, name: 'Heels', price: '₹500', image: slip4 },
  { id: 5, name: 'Stylish Flat', price: '₹600', image: slip5 },
  { id: 6, name: 'flat', price: '₹400', image: slip6 },
  { id: 7, name: 'war flat', price: '₹600', image: slip7 },
  { id: 8, name: 'sponch wear', price: '₹300', image: slip8 },
  { id: 9, name: 'flat', price: '₹300', image: slip9 },
  { id: 10, name: 'closed flat', price: '₹500', image: slip10 },
  { id: 11, name: 'flat ', price: '₹300', image: slip11 },
  { id: 12, name: 'flat', price: '₹400', image: slip12 },
  // Add more products as needed
];

const Foot = () => {
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
          <p>Total: ₹{calculateTotal().toFixed(2)}</p>
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

export default Foot;
