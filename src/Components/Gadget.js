import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import gad1 from './Images/samsung galaxy.webp';
import gad2 from './Images/motorola.jpg';
import gad3 from './Images/realme.webp';
import gad4 from './Images/red.webp';
import gad5 from './Images/Appl.jpg';
import gad6 from './Images/lenovo.webp';
import gad7 from './Images/dell.jpg';
import gad8 from './Images/samiii.jpg';
import gad9 from './Images/poco.jpg';
import gad10 from './Images/gad10.webp';
import gad11 from './Images/gad11.webp';
import gad12 from './Images/gad12.webp';
import './Gadget.css';

const products = [
  { id: 1, name: 'Galaxy Ultra', price: '₹55000', image: gad1 },
  { id: 9, name: 'PCOCO C51', price: '₹22000', image: gad9 },
  { id: 2, name: 'Mototola', price: '₹65000', image: gad2 },
  { id: 3, name: 'Realme Narzo', price: '₹23000', image: gad3 },
  { id: 4, name: 'Redmi 13C', price: '₹25000', image: gad4 },
  { id: 5, name: 'Iphone', price: '₹75000', image: gad5 },
  { id: 6, name: 'Lenovo Ideapad', price: '₹40000', image: gad6 },
  { id: 7, name: 'HP Folding', price: '₹58000', image: gad7 },
  { id: 8, name: 'SAMSUNG', price: '₹87000', image: gad8 },
  { id: 10, name: 'Smart watch with ash', price: '₹7000', image: gad10 },
  { id: 11, name: 'Smart watch with black', price: '₹5000', image: gad11 },
  { id: 12, name: 'Smart Watch with black', price: '₹1000', image: gad12 },
];

const Gadget = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleShowItemModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseItemModal = () => {
    setSelectedItem(null);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '')) * item.quantity, 0).toFixed(2);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 mb-4">
            <div className="card" style={{ borderRadius: '0px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: '1px solid white', background: '#FEF9E7  ', padding: '30px' }}>
              <img src={product.image} alt={product.name} className="card-img-top custom-image-size" width="100px" height="300px" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Times,serif,Times New Roman,philosopher', fontSize: '18px', textAlign: 'center' }}>{product.name}</h3>
                <p className="card-text" style={{ textAlign: 'center' }}>{product.price}</p>
                <div className="d-flex "style={{margin:'0px 45px'}}>
                  <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                    Add to Cart
                  </button>
                  <button onClick={() => handleShowItemModal(product)} className="btn btn-success" style={{marginLeft:'10px'}}>
                    View Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-row bg-light" style={{ display: 'flex', marginTop: '15px', marginLeft: '1050px', position: 'fixed', top: 0, background: 'none' }}>
        <button onClick={handleOpenCart} className="btn btn-primary">
          Open Cart
        </button>
        <Link to="/addToCart" className="btn btn-info ml-2">
          View Cart
        </Link>
      </div>

      <Modal show={showCart} onHide={handleCloseCart} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex justify-content-between">
              <div>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
              <div>
                <Button onClick={() => removeFromCart(item.id)} variant="danger">
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <p>Total: ₹{parseFloat(calculateTotal())}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close Cart
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={selectedItem !== null} onHide={handleCloseItemModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Selected Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <div className="cart-item">
              <img src={selectedItem.image} alt={selectedItem.name} />
              <div>
                <p>{selectedItem.name}</p>
                <p>{selectedItem.price}</p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gadget;
