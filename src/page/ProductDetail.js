import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductClient from "../client/ProductClient";
import "../styles.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ProductClient.getProductById(id)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Failed to load product:", err));
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="container">
      <div className="product-detail-card">
        <div className="product-image">
          <img
            src={product.image || "https://via.placeholder.com/300x300?text=No+Image"}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-quantity">Available: {product.quantity}</p>
          <p className="product-description">{product.description || "No description available."}</p>
          <div className="product-actions">
            <button onClick={() => navigate("/products")} className="btn-back">
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
