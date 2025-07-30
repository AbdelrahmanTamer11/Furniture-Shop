// src/pages/Home.js
import React from "react";
import "./Home.css"; // هننشئه كمان شوية

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Transform Your Space</h1>
        <p>Find modern furniture that fits your style and budget</p>
        <button className="shop-btn">Start Shopping</button>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Furniture</h2>
        <div className="products">
          <div className="product-card">
            <img src="https://tse2.mm.bing.net/th/id/OIP.seZ0B_zcWy5xo5feYVkxZQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Chair" />
            <h3>Modern Chair</h3>
            <p>$150</p>
          </div>
          <div className="product-card">
            <img src="https://tse3.mm.bing.net/th/id/OIP.jBRAtKWGWoYOHT4fNnQY1wHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Table" />
            <h3>Wooden Table</h3>
            <p>$300</p>
          </div>
          <div className="product-card">
            <img src="https://tse2.mm.bing.net/th/id/OIP.vzcmB3iYNxjM8QkZ_I7O8AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Sofa" />
            <h3>Comfort Sofa</h3>
            <p>$500</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
