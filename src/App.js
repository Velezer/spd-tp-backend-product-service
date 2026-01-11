import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import ProductList from "./page/ProductList";
import ProductCreate from "./page/ProductCreate";
import ProductEdit from "./page/ProductEdit";
import ProductDetail from "./page/ProductDetail";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/create" element={<ProductCreate />} />
        <Route path="/products/edit/:id" element={<ProductEdit />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
