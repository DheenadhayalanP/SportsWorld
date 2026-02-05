import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Provider'

export default function ProDetail(props) {

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
// ]


const {products} = useContext(DataContext)



 const {name} = useParams()

 console.log(name)
 const currentPro = products.find(por => por.name === name)
 console.log(currentPro)

 console.log(props.number1)
  return (
    <div>
      <img src={currentPro.img}/>
      <h2>{currentPro.name}</h2>
      <p>{currentPro.desc}</p>
      <h5>{currentPro.price}</h5>
    </div>
  )
}
