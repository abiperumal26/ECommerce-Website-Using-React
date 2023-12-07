// App.js
import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

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
import './App.css';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    // Add your login logic here
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // Add your logout logic here
  };

  const handleRegistration = (username) => {
    console.log(`User ${username} registered successfully!`);
    // Add any registration logic you need
  };

  return (
    <div>
      <nav>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          {isLoggedIn && <li><Link to="/products">Products</Link></li>}
          <li><Link to="/registration">Registration</Link></li>
          {isLoggedIn ? (
            <>
              {/* Remove the "Add To Cart" link from the navigation */}
              <li onClick={handleLogout} className="logout-button">Logout</li>
            </>
          ) : (
            <li><Link to="/login" className="login-button">Login</Link></li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <footer>&copy; Abinaya 2023</footer>
            </div>
          }
        />
        <Route
          path="/products"
          element={
            <div>
              <Products isLoggedIn={isLoggedIn} />
              <footer>&copy; Abinaya 2023</footer>
            </div>
          }
        />
        <Route
          path="/registration"
          element={
            <div>
              <RegistrationForm onRegistration={handleRegistration} />
              <footer>&copy; Abinaya 2023</footer>
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <LoginForm onLogin={handleLogin} />
              <footer>&copy; Abinaya 2023</footer>
            </div>
          }
        />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/gadget" element={<Gadget />} />
        <Route path="/homeappliance" element={<HomeAppliance />} />
        <Route path="/stationary" element={<Stationary />} />
        <Route path="/cloth" element={<Cloth />} />
        <Route path="/foot" element={<Foot />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
