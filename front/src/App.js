import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/Home.jsx";
import FormEdit from "./screens/EditProduct.jsx";
import ProductRegister from "./screens/ProductRegister.jsx";
import ProductDelete from "./screens/ProductDelete.jsx";
import Info from './screens/Info.jsx';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/productEdit"></Link>
        <Link to="/productRegister"></Link>
        <Link to="/productDelete"></Link>
        <Link to="/info"></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productEdit" element={<FormEdit />} />
        <Route path="/productRegister" element={<ProductRegister />} />
        <Route path="/productDelete" element={<ProductDelete />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
