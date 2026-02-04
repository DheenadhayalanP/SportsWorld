import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Anime from './Anime';
import { BrowserRouter } from 'react-router-dom';
import Provider from './Provider';
import Common from './Common';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  {/* <Provider>
     <App />
  </Provider> */}

  <Common>
    <Anime />
  </Common> 
   
  </BrowserRouter>
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

