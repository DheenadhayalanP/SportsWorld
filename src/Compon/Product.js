import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Provider';

export default function Product({number}) {


    const navigate = useNavigate()

    const refs = useRef(0)

    const {products} = useContext(DataContext)

    console.log(products)

    
//     const products = [
//   {
//     name: "Wireless Headphones",
//     desc: "Noise-cancelling over-ear headphones with 30 hours of battery life.",
//     img: "https://example.com/images/headphones.jpg",
//     price: 129.99
//   },
//   {
//     name: "Smartwatch Pro",
//     desc: "Water-resistant smartwatch with fitness tracking and GPS.",
//     img: "https://example.com/images/smartwatch.jpg",
//     price: 199.99
//   },
//   {
//     name: "4K Monitor",
//     desc: "27-inch UHD monitor with HDR and ultra-thin bezels.",
//     img: "https://example.com/images/monitor.jpg",
//     price: 349.00
//   },
//   {
//     name: "Portable Speaker",
//     desc: "Compact Bluetooth speaker with deep bass and 12-hour playtime.",
//     img: "https://example.com/images/speaker.jpg",
//     price: 59.99
//   }
// ];







// // Normal fetch
// fetch("api", {
//   method:'POST',
//   credentials : 'include',
//   // post and put
//   headers:{
//     'Content-Type' :'application/json',
//     'Accept':'application/json'
//   },
//   body:JSON.stringify({backend:fronname, backendName: fronendAge,...})
// })
// .then(res =>res.json())
// .then(datas =>{
//   if(datas.success)
//   {
//     alert(datas.message)
//   }
//   alert(datas.message)
// })
// .catch(err => console.log("Error in trouble")
// )






// // file post or put

// const formdata = new FormData()

// formdata.append('backendNmae', frontEndName)
// formdata.append('backendage', fronendAge)
// formdata.append('images',frontEndfilename)

// fetch("api", {
//   method:'POST',
//   credentials : 'include',
//   // post and put
//   body: formdata
 

// })
// .then(res =>res.json())
// .then(datas =>{
//   if(datas.success)
//   {
//     alert(datas.message)
//   }
//   alert(datas.message)
// })
// .catch(err => console.log("Error in trouble")
// )




console.log(refs)
return (
    <div>
        <h1>Product Details</h1>
{
   products.map((pro,i) =>(
    <div key={i}>
      <img src={pro.img}/>
      <h4>{pro.name}</h4>
      <button onClick={()=>number(30)}>ADD ME</button>
      <button onClick={() => navigate(`/pro/${pro.name}`)}>More</button>
    </div>
   )) 
}

<input type='text' ref={refs} onChange={(e) =>e.target.value}/>

    </div>
  )
}


// // try and catch => error handling
// try{
//   // block code
// }
// catch(err)
// {

// }
// finally
// {
  
// }