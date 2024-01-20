import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          {/* Add your navigation content here if needed */}
        </nav>
      </header>
      <main>
        <div className="image-container">
          <img
            src="https://qodeinteractive.com/magazine/wp-content/uploads/2021/09/Examples-of-Effective-eCommerce-Website-Design.jpg"
            alt="Welcome to Abinaya E-commerce shop"
          />
          <div className="image-overlay">
            <h1 className="animated-font">Welcome to Abinaya E-commerce Shop</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
