import { useState } from "react";
import ProductClient from "../client/ProductClient";
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ProductClient.createProduct({ name, price: Number(price), quantity: Number(quantity) });
    navigate("/products");
  };

  return (
    <div className="container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} required />
        <input placeholder="Quantity" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductCreate;
