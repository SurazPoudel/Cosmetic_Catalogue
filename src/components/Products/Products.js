import React, { useState } from 'react';
import { phonesData } from './Product.data';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = phonesData.filter(product =>
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="header">
        <h2>Our Products</h2>
      </div>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mainContainer">
        <div className="product-container">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={`/Products/assets/${product.image}`}
                alt={product.model}
                className="phone-img"
              />
              <div className="card-body-custom">
                <h5 className="product-title">{product.model}</h5>
                <p className="product-desc">{product.desc}</p>
                <p className="price">Rs. {product.price}</p>
                <p
                  className={`stock-status ${
                    product.qty === 0
                      ? 'out-of-stock'
                      : product.qty < 5
                      ? 'limited-stock'
                      : 'in-stock'
                  }`}
                >
                  {product.qty === 0
                    ? 'Out of Stock'
                    : product.qty < 5
                    ? 'Limited Stock'
                    : 'In Stock'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
