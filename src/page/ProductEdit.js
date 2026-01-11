import { useState, useEffect } from "react";
import ProductClient from "../client/ProductClient";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", price: "", quantity: "" });

  useEffect(() => {
    ProductClient.getProductById(id)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Failed to load product:", err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ProductClient.updateProduct(id, {
      name: product.name,
      price: Number(product.price),
      quantity: Number(product.quantity)
    });
    navigate("/products");
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <label>Name</label>
          <input
            placeholder="Name"
            value={product.name}
            onChange={e => setProduct({...product, name: e.target.value})}
            required
          />

          <label>Price</label>
          <input
            placeholder="Price"
            type="number"
            value={product.price}
            onChange={e => setProduct({...product, price: e.target.value})}
            required
          />

          <label>Quantity</label>
          <input
            placeholder="Quantity"
            type="number"
            value={product.quantity}
            onChange={e => setProduct({...product, quantity: e.target.value})}
          />

          <div className="form-actions">
            <button type="submit" className="btn-edit-submit">Update</button>
            <button type="button" onClick={() => navigate("/products")} className="btn-back">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
