import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  { id: 1, name: 'Classmate Spiral Binded Note Book', price: '₹750', image: stat1 },
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
            <div className="card" style={{ borderRadius: '0px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: '1px solid white', background: '#FFFBEB', padding: '30px' }}>
              <img src={product.image} alt={product.name} className="card-img-top custom-image-size" width="100px" height="300px" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Times,serif,Times New Roman,philosopher', fontSize: '18px', textAlign: 'center' }}>{product.name}</h3>
                <p className="card-text" style={{ textAlign: 'center' }}>{product.price}</p>
                <div className="d-flex justify-content-between">
                  <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                    Add to Cart
                  </button>
                  <button onClick={() => handleShowItemModal(product)} className="btn btn-success">
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

export default Stationary;
