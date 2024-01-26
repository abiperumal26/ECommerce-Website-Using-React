import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import stat1 from './Images/classmate.jpg';
import stat2 from './Images/note.jpg';
import stat3 from './Images/Memo pad notes.webp';
import stat4 from './Images/Flair.jpg';
import stat5 from './Images/oyatra.webp';
import stat6 from './Images/Cello.jpg';
import stat7 from './Images/Fun Clup Pen stand.webp';
import stat8 from './Images/HVOMA.jpg';
import stat9 from './Images/Hubuture.webp';
import stat10 from './Images/Finemeo.jpg';
import stat11 from './Images/goodiebox.jpg';
import stat12 from './Images/wolpin.jpg';
import './Stationary.css';

const products = [
  { id: 1, name: 'Classmate Spiral Binded Note ook', price: '₹750', image: stat1 },
  { id: 2, name: 'Wipe Book', price: '₹175', image: stat2 },
  { id: 3, name: 'Sticky Notes', price: '₹136', image: stat3 },
  { id: 4, name: 'Pens', price: '₹1000', image: stat4 },
  { id: 5, name: 'Mochi Highlighter', price: '₹198', image: stat5 },
  { id: 6, name: 'Glitter Pen', price: '₹100', image: stat6 },
  { id: 7, name: 'Pen Stand', price: '₹150', image: stat7 },
  { id: 8, name: 'Markers', price: '₹275', image: stat8 },
  { id: 9, name: 'Korean Highlighter', price: '₹536', image: stat9 },
  { id: 10, name: 'Boa Boa Pouch', price: '₹625', image: stat10 },
  { id: 11, name: 'Candy Highlighter', price: '₹360', image: stat11 },
  { id: 12, name: 'Shaped Sticky Notes', price: '₹230', image: stat12 },

];

const Stationary = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  // const navigate = useNavigate(); 

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
          {/* <p>Total: ₹{calculateTotal().toFixed(2)}</p> */}
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

export default Stationary;
