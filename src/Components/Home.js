// Home.js
import React, { useState } from 'react';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import logo from './Images/Abinaya.png';

import Products from './Products';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const Home = ({ isLoggedIn, handleLogout, handleRegistration, handleLogin }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleRegistrationSuccess = () => {
    // After successful registration, navigate to the login page
    return <Navigate to="/login" />;
  };

  const handleLoginSuccess = () => {
    // After successful login, navigate to the Products page
    return <Navigate to="/products" />;
  };

  const carouselItems = [
    'https://c4.wallpaperflare.com/wallpaper/215/944/975/warm-and-modern-living-room-living-room-set-wallpaper-preview.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-some-gold-gadgets-and-gadgets-laying-out-on-a-dark-background-image_2650301.jpg',
    'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?cs=srgb&dl=pexels-mark-2724748.jpg&fm=jpg',
    'https://c0.wallpaperflare.com/preview/641/862/428/art-color-colourful-composition.jpg',
    'https://images.squarespace-cdn.com/content/v1/54a04011e4b0d1a214af85a9/1555448520337-TVU6U6RCFLQIZRY0MCZJ/Screen+Shot+2019-04-16+at+5.01.40+PM.png?format=1000w',
    'https://static.showit.co/800/mYJ8kpCrRG6K5-9ImzRTiw/201493/westin-san-francisco-indian-wedding-mp-singh-photography-0049.jpg',
  ];

  const renderCarousel = (
    <Carousel
      indicators={false}
      activeIndex={index}
      onSelect={handleSelect}
      style={{ marginTop:'-10px',background:'cover', overflow: 'hidden', height:'calc(100vh-16px)' ,width:'120%',marginLeft:'-105px'}}>
      {carouselItems.map((item, idx) => (
        <Carousel.Item key={idx} style={{ height: 'calc(100vh - 56px)', overflowY: 'hidden' }}>
          <div
            className={`d-block w-100${idx === index ? ' active-slide' : ''}`}
            style={{
              backgroundImage: `url(${item})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              transition: 'opacity 1s ease-in-out',
              opacity: idx === index ? 1 : 0,
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );

  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="50px" height="50px" alt="logo" />
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
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<>{renderCarousel}</>} />
        <Route
          path="/products"
          element={
            isLoggedIn ? (
              <>
                {renderCarousel}
                <Products />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/registration"
          element={
            isLoggedIn ? (
              <Navigate to="/login" />
            ) : (
              <>
                {renderCarousel}
                <RegistrationForm onSuccess={handleRegistrationSuccess} />
              </>
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <>
                {renderCarousel}
                <Navigate to="/products" />
              </>
            ) : (
              <>
                {renderCarousel}
                <LoginForm onSuccess={handleLoginSuccess} />
              </>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
