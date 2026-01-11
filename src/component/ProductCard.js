import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <Link to={`/products/${product._id}`}>View Detail</Link>
    </div>
  );
};

export default ProductCard;
