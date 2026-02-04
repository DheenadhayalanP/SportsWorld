import React, { useState, useRef } from "react";
import "./Sell.css";

export default function Sell() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    currency: "₹",
    description: "",
    image: "",
  });

  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Product submitted:", formData);

    const newProduct = {
      ...formData,
      image: formData.image instanceof File ? URL.createObjectURL(formData.image) : formData.image,
  };

  if (editIndex !== null) {
    const updatedProducts = [...products];
    updatedProducts[editIndex] = newProduct;
    setProducts(updatedProducts);
    setEditIndex(null);
  } else {
    setProducts([...products, newProduct]);
  }

  setFormData({
    title: "",
    price: "",
    currency: "₹",
    description: "",
    image: "",
  });
    if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
  };

  const handleEdit = (index) => {
    const productToEdit = products[index];
    setFormData({
      title: productToEdit.title,
      price: productToEdit.price,
      currency: productToEdit.currency,
      description: productToEdit.description,
      image: productToEdit.image, 
    });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    if (editIndex === index) {
      setFormData({
        title: "",
        price: "",
        currency: "₹",
        description: "",
        image: "",
      });
      setEditIndex(null);
    }
  };

  return (
    <div>
    <div className="sell-container">
      <h1>{editIndex !== null ? "Edit Product" : "Sell Your Product"}</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Product Title" value={formData.title} onChange={handleChange} required />

        <div className="price-input">
          <select name="currency" value={formData.currency} onChange={handleChange} required >
            <option value="₹">₹ (INR)</option>
            <option value="$">$ (USD)</option>
          </select>
        </div>

        <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} pattern="^[0-9]+(\.[0-9]{1,2})?$" required />

        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

        <input type="file" name="image" accept="image/*" ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setFormData({ ...formData, image: file });
            }
          }}
        />

        {formData.image && (
          <div className="image-preview">
            <p>Uploaded Image:</p>
            <img id="upimg" width={100}  alt="Preview"
            src={formData.image instanceof File ? URL.createObjectURL(formData.image) : formData.image} />
          </div>
        )}

        <button id="sub" type="submit">
          {editIndex !== null ? "Update Product" : "Submit"}
        </button>
      </form>
    </div>

      <div className="submitted-products">
        <h2>Submitted Products</h2>
        {products.length === 0 ? (
          <center>No products submitted yet.</center>
        ) : (
          products.map((p, index) => (
            <div key={index} className="product-card">
              <h3>PRODUCT NAME : {p.title}</h3>
              <p> PRICE : {p.currency} {p.price} </p>
              <p>DESCRIPTION : {p.description}</p>
              <p id="img">IMAGE :</p>
              {p.image && <img id="upimg" src={p.image} alt={p.title} width={120} />}
              <br />

              <div className="card-buttons">
                <button className="edit-btn" onClick={() => handleEdit(index)}> Edit </button>
                <button className="delete-btn" onClick={() => handleDelete(index)} > Delete </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

