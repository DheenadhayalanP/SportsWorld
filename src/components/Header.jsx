import {useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../Img1/logo.png';


function Home(){
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 1);
      };
        window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

    return(
        <>
        <header className="hero">
        <div className="overlay"></div>
            <div className="hero-content">
                <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
                    <div id='Logo'>
                        <img width={'200'} src={logo} alt='Edusity Logo'/>
                    </div>
                    <div className="navLinks">
                        <a onClick={() => navigate("/")} >Home</a>
                        <a onClick={() => navigate("/program")} id="a1">Program</a>
                        <a onClick={() => navigate("/about")} >About Us</a>
                        <a onClick={() => navigate("/campus")} >Campus</a>
                        <a onClick={() => navigate("/contact")}  id="contact">Contact Us</a>
                    </div>
                </nav>

                <div className="hero-text">
                    <h1>We Ensure better education<br />for a better world</h1>
                    <p> Our cutting-edge curriculum is designed to empower students with the knowledge,
                    skills, and experiences needed to excel in the dynamic field of education.</p>
                    <button className="explore-btn">Explore more →</button>
                </div>
            </div>
        </header>
        </>
    );
}
export default Home;

