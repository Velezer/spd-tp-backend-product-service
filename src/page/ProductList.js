import { useState, useEffect } from "react";
import ProductClient from "../client/ProductClient";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = () =>
    ProductClient.getProducts().then(res => setProducts(res.data));

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await ProductClient.deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <div className="container">
      <h2>Product List</h2>
      <button onClick={() => navigate("/products/create")} className="btn-create">
        Create New
      </button>

      <div className="product-grid">
        {products.map(p => (
          <div key={p._id} className="card">
            <h3 
              className="clickable" 
              onClick={() => navigate(`/products/${p._id}`)}
            >
              {p.name}
            </h3>
            <p>Price: ${p.price}</p>
            <p>Qty: {p.quantity}</p>

            <div className="card-actions">
              <button onClick={() => navigate(`/products/${p._id}`)} className="btn-view">
                View
              </button>
              <button onClick={() => navigate(`/products/edit/${p._id}`)} className="btn-edit">
                Edit
              </button>
              <button onClick={() => handleDelete(p._id)} className="btn-delete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
