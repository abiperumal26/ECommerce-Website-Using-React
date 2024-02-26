// Navigation.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './Images/Abinaya.png'
const Navigation = ({ isLoggedIn, handleLogout }) => {
  const isFixedTop = window.location.pathname === '/login' || window.location.pathname === '/registration';

  return (
    <Navbar bg="light" expand="lg"style={{postion:'fixed',top:'0'}}>
      <Navbar.Brand as={Link} to="/">
        <img src={logo}width="50px" height="50px"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {!isLoggedIn && (
            <>
              <Nav.Link as={Link} to="/registration">
                Registration
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
