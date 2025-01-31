import React, { useState, useRef, useEffect } from "react";
import "./CSS/Header.css";
import logo from "../Images/logo.png";

const Header = ({ setQuery }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [hidden, setHidden] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const searchRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(true);
  };
  const handleClose = () => {
    setInputValue("");
    setQuery("");
   setShowSearch(false);
    
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <header className={`header ${hidden ? "header--hidden" : ""}`}>
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="header-logo" />
          <button className="custom-button">
            <span className="button-text">F</span>
            <span className="button-number">50</span>
          </button>
        </div>
        {!showSearch && (
          <button className="search-button" onClick={toggleSearch}>
            🔍
          </button>
        )}
        {showSearch && (
          <div style={{ display: "flex" }}>
            <input
              ref={searchRef}
              type="text"
              value={inputValue}
              placeholder="Search..."
              className="search-input"
              onChange={(e) => {
                setInputValue(e.target.value);
                setQuery(e.target.value.toLowerCase());
              }}
            />
            <button className="close-btn" onClick={handleClose}>
              ❌
            </button>
          </div>
        )}
        <button
          className="howtoplay"
          style={{ display: showSearch ? "none" : "" }}
        >
          How to play
        </button>
        <button className="hamburger-button" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {showMenu && (
        <div className="hamburger-menu">
          <ul className="menu-list">
            <li className="menu-item">Profile</li>
            <li className="menu-item">Wallet</li>
            <li className="menu-item">How to Play</li>
            <li className="menu-item">Support</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
