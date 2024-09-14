import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./navbar.css";
import logo from "/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img id="logo" src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        {/* Desktop Menu */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
        </div>
        {/* Desktop Buttons */}
        <div className="navbar-buttons">
          <button className="btn1">
            <Link to="/orderonline" id="btnLink1">
              Order Online
            </Link>
          </button>
          <button className="btn2">
            <Link to="/login" id="btnLink2">
              Login
            </Link>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="navbar-toggle">
          {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="#about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/menu" onClick={toggleMenu}>
          Menu
        </Link>
        <Link to="/reservations" onClick={toggleMenu}>
          Reservations
        </Link>
        <div className="mobileBtnContainer">
          <button className="btn1">
            <Link to="/orderonline" id="btnLink1" onClick={toggleMenu}>
              Order Online
            </Link>
          </button>
          <button className="mobileBtn2">
            <Link to="/login" id="mobileBtnLink2" onClick={toggleMenu}>
              Login
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
