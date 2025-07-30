import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./features/Home/HomePage";
import ProductsPage from "./features/Products/ProductsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* هنضيف باقي الصفحات هنا لاحقًا */}
      </Routes>
    </Router>
  );
}

export default App;
