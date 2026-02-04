import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Program from './components/Program';
import About from './components/About';
import Campus from './components/Campus';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Product from './Compon/Product';
import ProDetail from './Compon/ProDetail';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(0)
  return (
   <Routes>
    {/* <Route path='/' element={<Header />} />
    <Route path='/program' element={<Program />} />
    <Route path='/about' element={<About />} />
    <Route path='/campus' element={<Campus />} />
    <Route path='/contact' element={<Contact />} /> */}

    <Route path='/pro' element={<Product number={setData} />}/>
    <Route path='/pro/:name' element={<ProDetail  number1={data} />}/>

    <Route path='*' element={<NotFound />}></Route>
   </Routes>
  );
}

export default App;
