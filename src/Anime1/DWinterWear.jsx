import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../Common';
import './DTapestry.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function DWinterWear() {
  const { animeName1, addToCart } = useContext(DataContext); // ✅ Correctly pull animeName1
  
  const handleAddToCart = () => {
  if (!selectedSize) {
    alert("Please select a size first!");
    return;
  }
 
  const cartItem = {
    ...currentWear,
    size: selectedSize,
    price: selectedSize === "XSmall" ? 21
           : selectedSize === "Small" ? 23
           : selectedSize === "Medium" ? 24
           : selectedSize === "Large" ? 25
           : selectedSize === "XLarge" ? 26
           : 27,
  };
  
  addToCart(cartItem);
  alert(`${currentWear.name} (${selectedSize}) added to cart!`);
};
  
  
  const { name } = useParams();

  // ✅ Safely find the clicked item
  const currentWear = animeName1?.find(wear => wear.name === name);

  const [selectedSize, setSelectedSize] = useState(null);

  const prices = {
    XSmall: "Price : $21.00",
    Small: "Price : $23.00",
    Medium: "Price : $24.00",
    Large: "Price : $25.00",
    XLarge: "Price : $26.00",
    XXLarge: "Price : $27.00",
  };

  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // ✅ If item not found, show fallback
  if (!currentWear) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>WinterWear item not found.</h2>;
  }

  return (
    <section className="dtapestry-page">
      <div>
        <div className="dtap-img">
          <img src={currentWear.img} width={400} alt={currentWear.name} />
          {currentWear.img1 && <img src={currentWear.img1} width={400} alt={currentWear.name} />}
          {currentWear.hoverImg && <img src={currentWear.hoverImg} width={400} alt={currentWear.name} />}
        </div>

        <div className="split">
          <div className="dtapestry-card">
            <h2>{currentWear.name}</h2>

            <div className="rating">
              <FaStar color="black" />
              <FaStar color="black" />
              <FaStar color="black" />
              <FaStar color="black" />
              <FaStarHalfAlt color="black" />&nbsp;&nbsp;<span>[Customer Review]</span>
            </div>

            <div className="size-buttons">
                SIZE
              <button
                className={selectedSize === "XSmall" ? "active" : ""}
                onClick={() => setSelectedSize("XSmall")}>
                XS
              </button>

              <button
                className={selectedSize === "Small" ? "active" : ""}
                onClick={() => setSelectedSize("Small")}>
                S
              </button>

              <button
                className={selectedSize === "Medium" ? "active" : ""}
                onClick={() => setSelectedSize("Medium")}>
                M
              </button>

              <button
                className={selectedSize === "Large" ? "active" : ""}
                onClick={() => setSelectedSize("Large")}>
                L
              </button>

              <button
                className={selectedSize === "XLarge" ? "active" : ""}
                onClick={() => setSelectedSize("XLarge")}>
                XL
              </button>

              <button
                className={selectedSize === "XXLarge" ? "active" : ""}
                onClick={() => setSelectedSize("XXLarge")}>
                XXL
              </button>
            </div>

            <p className="price">
              {prices[selectedSize]}
            </p>

            <button className="buy" onClick={handleAddToCart}>ADD TO CART</button>
          </div>

          {/* Accordion */}
          <div className="accordion">
              <div className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleSection("offers")}
                >
                  OFFERS <span>{openSection === "offers" ? "−" : "+"}</span>
                </div>
                {openSection === "offers" && (
                  <div className="accordion-content">
                    <p><h4>Lead Offer:</h4>
                    <li> Shop for <b> 2000 or above</b> and unlock <b>Free Cable Bites.</b> Use Code: <b>"BITES"</b></li>
                    <li> Shop for <b>2500 or above</b> and unlock <b>Free DIY Brick Box.</b> Use Code: <b>"BRICKS"</b></li>
                    <li> Shop for <b>4000 or above</b> and unlock <b>Free Regular Tapestry.</b></li>
                    <li> Shop for <b>6500 or above</b> and upgrade <b>“Free Regular Tapestry”</b> to <b>Free Large Tapestry.</b></li><br />
                  <h4>First Order?</h4>
                   <li> Use code <b>"First10"</b> & get <b>10% Off</b></li><br />
                  <h4>Mixed Offer:</h4>
                   <li> Buy any 4 Badges & get 5th FREE</li>
                   <li> Buy any 4 Stickers & get 5th FREE</li><br />
                  <h4>Payment Offer:</h4>
                    <b>7.5% Cashback</b> On All Prepaid (Pay Online) Orders.<br />
                    (Cashback is added into user’s ComicSense wallet after order delivery).</p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleSection("desc")}
                >
                  DESCRIPTION <span>{openSection === "desc" ? "−" : "+"}</span>
                </div>
                {openSection === "desc" && (
                  <div className="accordion-content">
                    <p>
                      <li> Material: Premium cotton blend</li>
                      <li> Fit: Oversize / Streetwear style</li>
                      <li> Printing: High-quality sublimation</li>
                      <li> Durable stitching for long use</li>
                      <li> Comfortable for all seasons</li>
                      <li> Colors may vary slightly due to lighting</li>
                      <br />
                      <h3>Wash & Care:</h3>
                      <li> Hand / machine wash in cold water</li>
                      <li> Do not bleach</li>
                      <li> Dry inside out to protect print</li>
                    </p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleSection("shipping")}
                >
                  SHIPPING & RETURN INFO{" "}
                  <span>{openSection === "shipping" ? "−" : "+"}</span>
                </div>
                {openSection === "shipping" && (
                  <div className="accordion-content">
                    <p>
                      <h4>Shipping:</h4>
                      <li>Orders ship in 1-3 business days</li>
                      <li>Delivery: 3-7 days depending on location</li>
                      <br />
                      <h4>Return Policy:</h4>
                      <li>7-day easy return/exchange available</li>
                      <li>Return not accepted for washed/damaged items</li>
                    </p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleSection("additional")}
                >
                  ADDITIONAL INFO{" "}
                  <span>{openSection === "additional" ? "−" : "+"}</span>
                </div>
                {openSection === "additional" && (
                  <div className="accordion-content">
                    <p>
                      <strong>Country of Origin:</strong> India
                    </p>
                    <p>
                      <strong>Manufactured & Packed by:</strong>
                    </p>
                    <p>
                      COMICSENSE
                      <br />
                      G-1, D-29, Ground Floor, Ashiyana Apartment,
                      <br />
                      Shanti Path, Tilak Nagar, Jaipur, Rajasthan, 302004
                      <br />
                      care@comicsense.xyz
                    </p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
