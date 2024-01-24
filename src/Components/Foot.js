import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import slip1 from './Images/slipper1.webp';
import slip2 from './Images/slipper5.webp';
import slip3 from './Images/slipper3.webp';
import slip4 from './Images/sandle3.jpg';
import slip5 from './Images/sandle1.jpg';
import slip6 from './Images/sandl2.jpg';
import slip7 from './Images/shoes1.webp';
import slip12 from './Images/shoes5.webp';
import slip8 from './Images/shoes4.webp';

import slip9 from './Images/shoes3.webp';
import slip10 from './Images/wear4.webp';
import slip11 from './Images/wear2.webp';

import './Foot.css';
const products = [
  { id: 1, name: 'Flat Wear', price: '₹500', image: slip1 },
  { id: 2, name: 'BataWomens Alaska Sandal Heels', price: '₹450', image: slip2 },
  { id: 3, name: 'XE LooksBlock heel and Stylish Slippers', price: '₹700', image: slip3 },
  { id: 4, name: 'Heels', price: '₹500', image: slip4 },
  { id: 5, name: 'BataWomen Deva Thong E Heeled Sandal', price: '₹725', image: slip5 },
  { id: 6, name: 'STICYChappal for Women ', price: '₹599', image: slip6 },
  { id: 7, name: 'OFF LIMITS Men Kairo Running, Sports Shoes', price: '₹1,700', image: slip7 },
  { id: 8, name: 'ASIAN Shoe Casual Sneaker', price: '₹725', image: slip8 },
  { id: 9, name: 'ASIAN Mens Wonder', price: '₹599', image: slip9 },
  { id: 10, name: 'Mens Everest-02 Sports Trekking & Hiking', price: '₹1,044', image: slip10 },
  { id: 11, name: ' Skechers', price: '₹1,089', image: slip11 },
  { id: 12, name: 'Bersache Lightweight Casual Sneaker', price: '₹1,100', image: slip12 },
  // Add more products as needed
];

const Foot = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
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
    <div className="gadture-container" style={{
      marginTop:'80px'
    }}>
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

<div className='button-row' style={{
  marginTop:'25px',
  position:'fixed',
  top:0
}}>

<button onClick={handleOpenCart} className="open-cart-button">
  Open Cart
</button>



<Link to="/addToCart" className='view' >
  View Cart
</Link>

</div>
    </div>
  );
};

export default Foot;
