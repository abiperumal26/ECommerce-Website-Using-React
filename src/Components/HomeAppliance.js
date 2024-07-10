import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import H1 from './Images/Jubake.webp';
import H2 from './Images/comfyhome.webp';
import H3 from './Images/agara.webp';
import H4 from './Images/act.jpg';
import H5 from './Images/acts.webp';
import H6 from './Images/electric smokeless.webp';
import H7 from './Images/mineral.webp';
import H8 from './Images/Trolley.webp';
import H9 from './Images/portable blender.jpg';
import H10 from './Images/automatic coffee maker.jpg';
import H11 from './Images/prime spin mop.webp';
import H12 from './Images/bullet mixer grinder.jpg';
import './HomeAppli.css';

const products = [
  { id: 1, name: 'COMFYHOME Air Fryer', price: '₹5999', image: H1 },
  { id: 2, name: 'Air Fryer For Home', price: '₹4999', image: H2 },
  { id: 3, name: 'Acaro Oven', price: '₹1699', image: H3 },
  { id: 4, name: 'Activa Blender', price: '₹3000', image: H4 },
  { id: 5, name: 'ACTIVA Pluto Combo', price: '₹1599', image: H5 },
  { id: 6, name: 'Electric Stove', price: '₹4000', image: H6 },
  { id: 7, name: 'Water Purifier', price: '₹5999', image: H7 },
  { id: 8, name: 'Kitchen Trolley with wheels', price: '₹2299', image: H8 },
  { id: 9, name: 'Protable Blender ', price: '₹1800', image: H9 },
  { id: 10, name: 'Instant Coffee Maker', price: '₹10000', image: H10 },
  { id: 11, name: 'Mob', price: '₹800', image: H11 },
  { id: 12, name: 'Cook Well Bullet Mixer Grinder', price: '₹2477', image: H12 },
];

const HomeAppliance = () => {
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
            <div className="card" style={{ borderRadius: '0px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: '1px solid white', background: '#F2F4F4 ', padding: '30px' }}>
              <img src={product.image} alt={product.name} className="card-img-top custom-image-size" width="100px" height="400px" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Times,serif,Times New Roman,philosopher', fontSize: '18px', textAlign: 'center' }}>{product.name}</h3>
                <p className="card-text" style={{ textAlign: 'center' }}>{product.price}</p>
                <div className="d-flex "style={{margin:'0px 35px'}}>
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

export default HomeAppliance;
