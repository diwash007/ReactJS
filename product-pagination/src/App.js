import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";
import HomePage from "./HomePage";
import Categories from "./Categories";
import LoginPage from "./LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
