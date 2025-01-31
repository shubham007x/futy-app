import React, { useState, useEffect, useRef } from "react";
import "./CSS/Footer.css"; 
import homeIcon from "../Images/logo.png";
import favoritesIcon from "../Images/pro.bmp";
import football from "../Images/football.png";
import f from "../Images/f.png";

const Footer = () => {
  const [hidden, setHidden] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
   
      setHidden(true);

    
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setHidden(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <footer className={`footer ${hidden ? "footer--hidden" : ""}`}>
      <nav className="footer-nav">
        <a href="#home" className="nav-item">
          <img src={homeIcon} alt="Home" className="icon" />
        </a>
        <a href="#favorites" className="nav-item">
          <img src={favoritesIcon} alt="Favorites" className="icon" />
        </a>
        <a href="#wallet" className="nav-item">
          <img src={football} alt="Wallet" className="icon" />
        </a>
        <a href="#home" className="nav-item">
          <img src={f} alt="Home" className="icon" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
