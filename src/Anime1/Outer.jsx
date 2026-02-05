import { useNavigate } from 'react-router-dom';
import './Outer.css';

export default function Outer() {
  

  return (
    <div>
      <section id="outer">
        <div className="deskmat">
            <h2 onClick={() => navigate(`/anime/${anime.name}`)}>{anime.name}</h2>
            <div id='but'>
                <button onClick={() => navigate(`/anime/${anime.name}`)}> KnowMore </button>
            </div>
        </div>
      </section>
    </div>
  );
}


