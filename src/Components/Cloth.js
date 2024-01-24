
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dress1 from './Images/clooo3.webp';
import dress2 from './Images/clooo2.webp';
import dress3 from './Images/clooo4.webp';
import dress4 from './Images/meen5.webp';
import dress5 from './Images/meen6.webp';
import dress6 from './Images/meen8.webp';
import dress7 from './Images/meesho3.webp';
import dress8 from './Images/meesho2.webp';
import dress9 from './Images/meesho5.webp';
import dress10 from './Images/meen10.webp';
import dress11 from './Images/meen8.webp';
import dress12 from './Images/meen12.jpg';
import './Cloth.css';
const products = [
  { id: 1, name: 'Frock', price: '₹500', image: dress1 },
  { id: 2, name: 'Kurti', price: '₹800', image: dress2 },
  { id: 3, name: 'cotton Frock', price: '₹500', image: dress3 },
  { id: 4, name: 'cashual shirt', price: '₹400', image: dress4 },
  { id: 5, name: 'stylish shirt ', price: '₹600', image: dress5 },
  { id: 6, name: 'Formal shirt', price: '₹400', image: dress6 },
  { id: 7, name: 'Full Frock', price: '₹600', image: dress7 },
  { id: 8, name: 'Modern Tops', price: '₹500', image: dress8 },
  { id: 9, name: 'Modern Kurti', price: '₹800', image: dress9 },
  { id: 10, name: 'Blue shirt', price: '₹400', image: dress10 },
  { id: 11, name: 'Double Side ', price: '₹1,000', image: dress11 },
  { id: 12, name: 'stylish shirt', price: '₹800', image: dress12 },
  // Add more products as needed
];

const Cloth = () => {
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

export default Cloth;
