import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages
import HomePage from "./features/Home/HomePage";
import ProductsPage from "./features/Products/ProductsPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* هنضيف باقي الصفحات هنا لاحقًا */}
      </Routes>
    </Router>
  );
}

export default App;
