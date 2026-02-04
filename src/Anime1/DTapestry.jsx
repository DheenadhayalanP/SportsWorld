import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Common';
import './DTapestry.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


export default function DTapestry() {


  const { animeName, addToCart } = useContext(DataContext);

const handleAddToCart = () => {
  if (!selectedSize) {
    alert("Please select a size first!");
    return;
  }
 
  const cartItem = {
    ...currentanime,
    size: selectedSize,
    price: selectedSize === "Regular" ? 29 : 49,
  };

  addToCart(cartItem);
  alert(`${currentanime.name} (${selectedSize}) added to cart!`);
};







 const {name} = useParams()

 const currentanime = animeName.find(anime => anime.name === name)


  const [selectedSize, setSelectedSize] = useState(null);

  
  const prices = {
    Regular: "Price : $29.00",
    Large: "Price : $49.00"
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };




  

  return (
  <section className="dtapestry-page">
  <div>
    <div>
      <div className='dtap-img'>
        <img src={currentanime.img} width={400}/>
        <img src={currentanime.img1} width={400}/>
        <img src={currentanime.hoverImg} width={400}/>
        {/* <img src={currentanime.img2} width={400}/> */}
      </div>
      <div className='split'>
      <div className="dtapestry-card">
        <h2>{currentanime.name}</h2>
    
        <div className="rating">
          <FaStar color="black" />
          <FaStar color="black" />
          <FaStar color="black" />
          <FaStar color="black" />
          <FaStarHalfAlt color="black" />&nbsp;&nbsp;<span>[Customer Review]</span>
        </div>


        <div className="size-buttons">
          <button className={selectedSize === "Regular" ? "active" : ""}  onClick={() => setSelectedSize("Regular")} >
            Regular (56 x 46 in)
          </button>

          <button className={selectedSize === "Large" ? "active" : ""}  onClick={() => setSelectedSize("Large")} >
            Large (84 x 58 in)
          </button>
        </div>

        <p className="price">
          {prices[selectedSize]}
        </p>
        {/* {selectedSize && (
          <p className="price">
            Price: {prices[selectedSize]}
          </p>
        )} */}


        <button className='buy' onClick={handleAddToCart}>ADD TO CART</button>
          </div>


            {/* Accordion */}
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleSection("offers")}>
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
            <div className="accordion-header" onClick={() => toggleSection("desc")}>
              DESCRIPTION <span>{openSection === "desc" ? "−" : "+"}</span>
            </div>
            {openSection === "desc" && (
              <div className="accordion-content">
                <p> 
                  <li> Available in 2 sizes: Regular (56 in x 46 in)  Large (84 in x 58 in)</li>
                  <li> Fabric: Heavy-quality satin</li>
                  <li> Printing: Sublimation</li>
                  <li> Print quality: HD non-fading</li>
                  <li> Hanging rivet holders on all 4 corners</li>
                  <li>Comes with 4 Adhesive screw:</li>
                  <li>Peel to stick on a clean surface</li>
                  <li>easy to use – no drilling required</li>
                  <li> Colors may vary due to photography and your screen setting</li>
                  <li> Size may vary by +/- 1 inch</li><br />
                  <h3>Wash & Care:</h3>
                  <li> Hand/Machine wash in COLD water</li>
                  <li> Dry the tapestry on the non-printed side to prevent fading</li>
                </p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleSection("shipping")}>
              SHIPPING & RETURN INFO <span>{openSection === "shipping" ? "−" : "+"}</span>
            </div>
            {openSection === "shipping" && (
              <div className="accordion-content">
                <p>
                  <h4> Order Shipping Time:</h4>
                    <li>Regular Orders: 1-3 business days.</li>
                    <li>Pre-Orders: As mentioned on the product page.</li>
                    Note: Order shipping can be delayed due to public/national holidays. <br /><br />
                  <h4>Average Delivery Time (after order shipped):</h4>
                    <li>Metros: 2-5 business days.</li>
                    <li>Rest of India: 3-7 business days.</li><br />
                  <h4>Return Info:</h4>
                    <li>Exchange/Return is not eligible for non-apparel products.</li>
                    <li>Due to hygiene reasons categories like masks, boxers, vests, headgear, socks <br /> etc are not eligible for exchange/return.</li>
                </p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleSection("additional")}>
              ADDITIONAL INFO <span>{openSection === "additional" ? "−" : "+"}</span>
            </div>
            {openSection === "additional" && (
              <div className="accordion-content">
                <p><strong>Country of Origin:</strong> India</p>
                <p><strong>Manufactured & Packed by:</strong></p>
                <p>COMICSENSE<br />
                G-1, D-29, GROUND FLOOR, ASHIYANA APARTMENT, SHANTI PATH, TILAK NAGAR,<br />
                JAIPUR, Rajasthan, 302004<br />
                care@comicsense.xyz</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  </div>
  </section>
  )
}

