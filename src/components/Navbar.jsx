import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./navbar.css";
import logo from "/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldScrollToAbout, setShouldScrollToAbout] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAbout = (event) => {
    event.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setShouldScrollToAbout(true);
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (isOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (shouldScrollToAbout && location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      setShouldScrollToAbout(false);
    }
  }, [location, shouldScrollToAbout]);

  const goToHomeAndScrollTop = (event) => {
    event.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" onClick={goToHomeAndScrollTop}>
          <img id="logo" src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        {/* Desktop Menu */}
        <div className="navbar-links">
          <a href="/" onClick={goToHomeAndScrollTop}>Home</a>
          <a href="#about" onClick={scrollToAbout}>About</a>
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
        <a href="/" onClick={goToHomeAndScrollTop}>
          Home
        </a>
        <a href="#about" onClick={scrollToAbout}>
          About
        </a>
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
