import React from "react";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <p>Explore our modern furniture collection!</p>
      <div className="product-list">
        <div className="product-item">
          <img src="https://www.decorpion.com/wp-content/uploads/2019/08/1565693495_377_modern-chairs-that-will-quickly-transform-the-look-of-any-room.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Description of Product 1</p>
          <p>Price: $XX.XX</p>
        </div>
        <div className="product-item">
          <img src="https://www.decorpion.com/wp-content/uploads/2019/08/1565693495_377_modern-chairs-that-will-quickly-transform-the-look-of-any-room.jpg" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Description of Product 2</p>
          <p>Price: $XX.XX</p>
        </div>
        <div className="product-item">
          <img src="https://www.decorpion.com/wp-content/uploads/2019/08/1565693495_377_modern-chairs-that-will-quickly-transform-the-look-of-any-room.jpg" alt="Product 3" />
          <h3>Product 3</h3>
          <p>Description of Product 3</p>
          <p>Price: $XX.XX</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;