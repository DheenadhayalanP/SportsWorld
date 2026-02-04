import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Common';
import './Detail.css';


export default function Detail(props) {

  const {animeName} = useContext(DataContext);


 const {name} = useParams()

 const currentanime = animeName.find(anime => anime.name === name)
 console.log(currentanime)

   console.log(props.charector1)

  return (
    <section id='bg'>
  <div id='all'>
    <div id='all1'><br />
      <img src={currentanime.img} width={250}/>
      <h2 id='name'>{currentanime.name}</h2><br />
      <h3>{currentanime.mc}</h3><br />
      <p>{currentanime.desc}</p><br />
      <h4>{currentanime.season}</h4><br /><br />
    </div>
  </div>
  </section>
  )
}
