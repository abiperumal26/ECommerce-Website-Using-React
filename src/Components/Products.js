// Products.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import pro1 from './Images/furni112.webp';
import pro2 from './Images/shirt.webp';
import pro3 from './Images/mob.webp';
import pro4 from './Images/Home.jpg';
import pro5 from './Images/foot.webp';
import pro6 from './Images/magnet.webp';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Furnitures', price: '$20', image: 'https://m.media-amazon.com/images/I/81ENrcbP+GL._AC_UL480_FMwebp_QL65_.jpg', route: '/furniture' },
    { id: 2, name: 'Gadgets', price: '$25', image:'https://m.media-amazon.com/images/I/61mJSikurML._AC_UL480_FMwebp_QL65_.jpg', route: '/gadget' },
    { id: 3, name: 'Home Appliances', price: '$30', image: 'https://m.media-amazon.com/images/I/41ePZES6E0L._SX300_SY300_QL70_FMwebp_.jpg', route: '/homeappliance' },
    { id: 4, name: 'Stationary', price: '$35', image:'https://m.media-amazon.com/images/I/71x4xf1NHvL._AC_UL480_QL65_.jpg', route: '/stationary' },
    { id: 5, name: 'Cloths', price: '$20', image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/dress/l/n/a/m-dresses-for-women-one-piece-dress-dress-for-women-ladies-dress-original-imagtezhbraxk7wk.jpeg?q=70&crop=false', route: '/cloth' },
    { id: 6, name: 'Foot Wears', price: '$25', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/u/p/e/3-rdl0041-red-tape-cameo-original-imagx2ynnag5zdhw.jpeg?q=70', route: '/foot' },
  ];

  const handleProductClick = (route) => {
    navigate(route);
  };

  return (
    <div className="product-container" style={{ marginTop: '50px' }}>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={product.route}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onClick={() => {
                handleProductClick(product.route);
              }}
              style={{padding:'20px'}}
            />
          </Link>
          <h3 style={{fontFamily:'Tiems,serif'}}>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Products;
