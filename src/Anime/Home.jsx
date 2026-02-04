import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { DataContext } from '../Common';
import logo from "../Img/logo.png"


export default function Home({charector}) {


  const navigate = useNavigate()

  const {animeName, mangaName} = useContext(DataContext);

  
  return (
    <div>     

      <section className="manga-section1">
        <h1>Iconic Anime</h1>
        <div className="card-container">
          {
            animeName.map((anime,i) =>(
            <div className="card1" key={i}>
            <center> <h2>{anime.name}</h2> 
               <button onClick={() => { charector(40); navigate(`/anime/${anime.name}`)}}> KnowMore </button>
            </center>
            </div>
          ))}
        </div>
      </section>
        
      <section className="manga-section">
        <h1>Iconic Manga</h1>
        <div className="card-container">
          {mangaName.map((manga, index) => (
            <div className="card" key={index}>
              <h2>{manga.name}</h2>
              <p>{manga.desc}</p><br />
              <p><b>Author:</b> {manga.author}</p><br />
              <p><b>Volumes:</b> {manga.volumes}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}



























// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import { DataContext } from '../Common';
// import logo from "../Img/logo.png"


// export default function Home() {


//   const navigate = useNavigate()

//   const {animeName, mangaName} = useContext(DataContext);

  
//   return (
//     <div>     

//       <section className="manga-section1">
//         <h1>Iconic Anime</h1>
//         <div className="card-container">
//           {
//             animeName.map((anime,i) =>(
//             <div className="card1" key={i}>
//             <center> <h2>{anime.name}</h2> 
//             <button onClick={() => navigate(`/anime/${anime.name}`)}>KnowMore</button> </center>
//             </div>
//           ))}
//         </div>
//       </section>
        
//       <section className="manga-section">
//         <h1>Iconic Manga</h1>
//         <div className="card-container">
//           {mangaName.map((manga, index) => (
//             <div className="card" key={index}>
//               <h2>{manga.name}</h2>
//               <p>{manga.desc}</p><br />
//               <p><b>Author:</b> {manga.author}</p><br />
//               <p><b>Volumes:</b> {manga.volumes}</p>
//               {/* <button onClick={() => navigate(`/manga/${manga.name}`)}>KnowMore</button> */}
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   )
// }