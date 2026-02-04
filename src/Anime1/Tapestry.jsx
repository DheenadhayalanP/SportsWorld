import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tapestry.css';
import { DataContext } from '../Common';

export default function Tapestry() {
  const navigate = useNavigate();
  const { animeName, addToCart } = useContext(DataContext);

  const [startIndex, setStartIndex] = useState(0); 
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (startIndex + itemsPerPage >= animeName.length) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };
 
  const prevSlide = () => {
    if (startIndex === 0) {
      setStartIndex(animeName.length - itemsPerPage);
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleItems = animeName.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <section id="tapestry">
        <h1 id="head">Tapestry</h1>

        <div className="tapestry-container">
          <div className="tapestry-nav">
            <button  onClick={prevSlide}>⬅</button>
          </div>

          {visibleItems.map((anime, i) => (
            <div className="tapestry" key={i}> 

              <div className="tapestry-img-wrapper">
                <img className="normal-img" onClick={() => navigate(`/anime/${anime.name}`)} src={anime.img} width={320} alt={anime.name}/>
                <img className="hover-img" onClick={() => navigate(`/anime/${anime.name}`)} src={anime.hoverImg} width={320} alt={anime.name}/>
              </div>

                <h2 onClick={() => navigate(`/anime/${anime.name}`)}>{anime.name}</h2>
                <div id='but'><button onClick={() => navigate(`/anime/${anime.name}`)}> KnowMore </button>
                <button onClick={() => addToCart({...anime, size: "Regular", price: 29})}> Add to Cart </button> </div>
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


