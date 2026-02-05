import { useEffect } from "react";
import './Nav.css';
import logo from "../Img/logo.png"; 
import { useContext } from "react";
import { DataContext } from "../Common";
import { Link, useLocation, useNavigate  } from "react-router-dom";


export default function Home() {

  const { cart } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();

 
  useEffect(() => {
    const nav = document.querySelector("nav");
    const menu = document.querySelector('.menu');
    const menuList = document.querySelector('nav ul');
    
    const handleScroll = () => {
      if (window.scrollY > 1) {  
        nav.classList.add("scrolled");
        menuList.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
        menuList.classList.remove("scrolled");
      }
    };

    const handleMenu = () => {
      menuList.classList.toggle('showmenu');
    };

    window.addEventListener("scroll", handleScroll);
    menu.addEventListener("click", handleMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menu.removeEventListener("click", handleMenu);
    };
  }, []);
  
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav>
        <div>
          <Link to="/"><img src={logo} id='logo' width={200} alt="logo"/></Link>
        </div>
        
        <ul>
          <li>
            {location.pathname === "/" ? (
              <a href="#winterwear" onClick={(e) => { e.preventDefault(); handleScrollTo("winterwear"); }} > Winter Wear </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => handleScrollTo("winterwear"), 300)} > Winter Wear </Link>
            )}
          </li>

          <li>
            {location.pathname === "/" ? (
              <a href="#tapestry" onClick={(e) => { e.preventDefault(); handleScrollTo("tapestry"); }} > Tapestry </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => handleScrollTo("tapestry"), 300)} > Tapestry </Link>
            )}
          </li>

          <li><Link to="/sell">Sell</Link></li>
          <li><Link to="/cart">🛒 CART ({cart.length})</Link></li>
        </ul>
        
        <div className="menu">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>

      </nav>
    </div>
  )
}

