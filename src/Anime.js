import { BrowserRouter as Router, Routes, Route } from 'react-router';
import NotFound from './components/NotFound';
import Home from './Anime/Home';
import Detail from './Anime/Detail';
import Common from './Common';
import Nav from './Anime/Nav';
import DTapestry from './Anime1/DTapestry';
import { useState } from 'react';
import DWinterWear from './Anime1/DWinterWear';
import MyHome from './Anime1/Home';
import Cart from './Anime1/Cart';
import Sell from './Anime/Sell';
import Buy from './Anime1/Buy';
import Footer from './Anime/Footer';
import './Anime.css';


function Anime() { 
  const [main, setMain] = useState(0);
  return (
    
    <div className="app-container">
    <Common>
      <Nav/>
        <div className="content">
          <Routes>    
            <Route path="/" element={<MyHome />} />
            <Route path="/anime/:name" element={<DTapestry />} />
            <Route path="/winterwear/:name" element={<DWinterWear />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/buy" element={<Buy />} />

            {/* <Route path='/' element={<Home charector = {setMain} />} />
            <Route path='/anime/:name' element={<Detail charector1 = {main} />}/> */}

            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      <Footer />
   </Common>
   </div>
   
  );
}

export default Anime;
