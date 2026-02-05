import React, { createContext } from 'react'


export const DataContext = createContext()
export default function Provider(props) {

const products = [
  {
    name: "Wireless Headphones",
    desc: "Noise-cancelling over-ear headphones with 30 hours of battery life.",
    img: "https://example.com/images/headphones.jpg",
    price: 129.99
  },
  {
    name: "Smartwatch Pro",
    desc: "Water-resistant smartwatch with fitness tracking and GPS.",
    img: "https://example.com/images/smartwatch.jpg",
    price: 199.99
  },
  {
    name: "4K Monitor",
    desc: "27-inch UHD monitor with HDR and ultra-thin bezels.",
    img: "https://example.com/images/monitor.jpg",
    price: 349.00
  },
  {
    name: "Portable Speaker",
    desc: "Compact Bluetooth speaker with deep bass and 12-hour playtime.",
    img: "https://example.com/images/speaker.jpg",
    price: 59.99
  }
]

const data = {products}


  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  )
}
