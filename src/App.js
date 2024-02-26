// App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Products from './Components/Products';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import Furniture from './Components/Furniture';
import Gadget from './Components/Gadget';
import HomeAppliance from './Components/HomeAppliance';
import Stationary from './Components/Stationary';
import Cloth from './Components/Cloth';
import Foot from './Components/Foot';
import AddToCart from './Components/AddToCart';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Placeholder function for order submission
const yourSubmitOrderFunction = (userDetails) => {
  // Your implementation
  console.log('Submitting order:', userDetails);
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // Navigate to the homepage after logout
    return <Navigate to="/" />;
  };

  const handleRegistration = (username) => {
    console.log(`User ${username} registered successfully!`);
  };

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} showViewCartButton={window.location.pathname === '/products'} />
      <Container>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/registration" element={<RegistrationForm onRegistration={handleRegistration} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/gadget" element={<Gadget />} />
          <Route path="/homeappliance" element={<HomeAppliance />} />
          <Route path="/stationary" element={<Stationary />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/foot" element={<Foot addToCart={addToCart} />} />
          {isLoggedIn && <Route path="/addToCart" element={<AddToCart cartItems={cartItems} onSubmitOrder={yourSubmitOrderFunction} />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
