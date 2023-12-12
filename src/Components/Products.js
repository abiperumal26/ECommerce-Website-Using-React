import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import pro1 from './Images/furni4.webp';
import pro2 from './Images/dress10.webp';
import pro3 from './Images/gad12.webp';
import pro4 from './Images/H10.webp';
import pro5 from './Images/slip13.webp';
import pro6 from './Images/stat10.webp';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Furnitures', price: '$20', image: pro1, route: '/furniture' },
    { id: 2, name: 'Gadgets', price: '$25', image: pro3, route: '/gadget' },
    { id: 3, name: 'Home Appliances', price: '$30', image: pro4, route: '/homeappliance' },
    { id: 4, name: 'Stationary', price: '$35', image: pro6, route: '/stationary' },
    { id: 5, name: 'Cloths', price: '$20', image: pro2, route: '/cloth' },
    { id: 6, name: 'Foot Wears', price: '$25', image: pro5, route: '/foot' },
  ];

  const handleProductClick = (route) => {
    navigate(route);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={product.route}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onClick={() => handleProductClick(product.route)}
            />
          </Link>
          <h3>{product.name}</h3>
          {/* <Link to="/addToCart" className="add-to-cart-link">
            Add to Cart
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Products;
