import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tapestry.css'; // you can duplicate/rename CSS later if needed
import { DataContext } from '../Common';

export default function WinterWear() {
  const navigate = useNavigate();
  const { animeName1, addToCart } = useContext(DataContext); // 👈 use animeName1 for WinterWear

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (startIndex + itemsPerPage >= animeName1.length) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };
 
  const prevSlide = () => {
    if (startIndex === 0) {
      setStartIndex(animeName1.length - itemsPerPage);
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleItems = animeName1.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <section id="winterwear">
        <h1 id="head">Winter Wear</h1>

        <div className="tapestry-container">
          <div className="tapestry-nav">
            <button onClick={prevSlide}>⬅</button>
          </div>

          {visibleItems.map((wear, i) => (
            <div className="tapestry" key={i}>
              <div className="tapestry-img-wrapper">
                <img
                  className="normal-img"
                  onClick={() => navigate(`/winterwear/${wear.name}`)} // 👈 route updated
                  src={wear.img}
                  width={320}
                  alt={wear.name}
                />
                <img
                  className="hover-img"
                  onClick={() => navigate(`/winterwear/${wear.name}`)} // 👈 route updated
                  src={wear.hoverImg}
                  width={320}
                  alt={wear.name}
                />
              </div>

              <h2 onClick={() => navigate(`/winterwear/${wear.name}`)}>
                {wear.name}
              </h2>
              <div id='but'>
                <button onClick={() => navigate(`/winterwear/${wear.name}`)}> Know More </button>
                <button onClick={() => addToCart({...wear, size: "Medium", price: 24})}>Add to Cart</button> 
              </div>

            </div>
          ))}

          <div className="tapestry-nav">
            <button onClick={nextSlide}>➡</button>
          </div>
        </div>
      </section>
    </div>
  );
}
