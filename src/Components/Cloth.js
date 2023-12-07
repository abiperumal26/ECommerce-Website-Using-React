// Cloth.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dress1 from './Images/cloth.webp';
import dress2 from './Images/dress2.webp';
import dress3 from './Images/dress3.webp';
import dress4 from './Images/dress4.webp';
import dress5 from './Images/dress5.webp';
import dress6 from './Images/dress6.webp';
import dress7 from './Images/dress7.webp';
import dress8 from './Images/dress8.webp';
import dress9 from './Images/dress9.webp';
import dress10 from './Images/dress10.webp';
import dress11 from './Images/dress11.webp';
import dress12 from './Images/dress12.webp';
import './Gadget.css';

// Placeholder data for products
const products = [
  { id: 1, name: 'Frock', price: '₹500', image: dress1 },
  { id: 2, name: 'Top with Medi', price: '₹800', image: dress2 },
  { id: 3, name: 'cotton Frock', price: '₹500', image: dress3 },
  { id: 4, name: 'Modern top', price: '₹400', image: dress4 },
  { id: 5, name: 'Modern top ', price: '₹600', image: dress5 },
  { id: 6, name: 'sleeve top', price: '₹400', image: dress6 },
  { id: 7, name: 'cashual shirt', price: '₹600', image: dress7 },
  { id: 8, name: 'stylish shirt', price: '₹500', image: dress8 },
  { id: 9, name: 'Formal shirt', price: '₹800', image: dress9 },
  { id: 10, name: 'white shirt', price: '₹400', image: dress10 },
  { id: 11, name: 'Double Side ', price: '₹1,000', image: dress11 },
  { id: 12, name: 'stylish shirt', price: '₹800', image: dress12 },
  // Add more products as needed
];

const Cloth = () => {
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

export default Cloth;
