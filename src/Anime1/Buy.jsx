import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Buy.css";

export default function Buy() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [confirmed, setConfirmed] = useState(false);

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>No product selected.</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: product.name,
      size: product.size || "N/A",
      price: `$${product.price}`,
      img: product.img,
      to_email: "dheenadd18@gmail.com",
    };

    emailjs
      .send("service_ej0h92w", "template_llmaovn", templateParams, "a8BkkWV5iofm71cqY")
      .then(
        (response) => {
          console.log(" Email sent:", response);
          setConfirmed(true);
          setTimeout(() => navigate("/cart"), 2000);
        },
        (error) => {
          console.error(" Email error:", error);
        }
      );
  };

  return (
    <div className="buy-page">
      <h1>Confirm Purchase</h1>
      <div className="buy-details">
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Size:</strong> {product.size || "N/A"}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        {product.img && <img src={product.img} alt={product.name} width={150} />}
      </div>

      {confirmed ? (
        <p className="success-msg"> Purchase confirmed! Redirecting to cart...</p>
          ) : (
        <form onSubmit={handleSubmit}>
          <button type="submit" className="buy-btn">Confirm Purchase</button>
        </form>
      )}
    </div>
  );
}

