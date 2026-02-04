import './Footer.css';
import logo from "../Img/logo.png";
import discord from "../Img/discord.png";
import insta from "../Img/insta.webp"; 
import youtube from "../Img/youtube.png"; 
import { Link, useNavigate } from "react-router-dom";



export default function Footer() {

    const navigate = useNavigate();

    return (

      <footer>
        <div>
          <Link to="/"><img src={logo} id='logo1' width={200} alt="logo"/></Link>
        </div>
        
        <div id='social'>

            <a href="https://discord.com/invite/4hxapWeaeN" target="_blank" rel="noopener noreferrer">
                <img src={discord} id='so1' width={55} alt="logo"/>
            </a>

            <a href="https://www.instagram.com/comicsense.basement/" target="_blank" rel="noopener noreferrer">
                <img src={insta} id='so2' width={60} alt="logo"/>
            </a>
            <a href="https://www.youtube.com/@comicsensexyz" target="_blank" rel="noopener noreferrer">
                <img src={youtube} id='so3' width={57} alt="logo"/>
            </a>
        </div>
        

        <div>
            <li>Photos & Reviews</li>
            <li>Track Order</li>
            <li>Coupons & Offers</li>
            <li>Need Help?</li>
        </div>

        <div>
            <li>100 Days Return policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>About us</li>
        </div>
        

      </footer>
    
  )
}
