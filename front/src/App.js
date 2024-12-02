import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/Home.jsx";
import FormEdit from "./screens/EditProduct.jsx";
import ProductRegister from "./screens/ProductRegister.jsx";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/productEdit"></Link>
        <Link to="/productRegister"></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productEdit" element={<FormEdit />} />
        <Route path="/productRegister" element={<ProductRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
