
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 40) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div
        className={`navbar ${isSticky ? 'sticky' : ''}`}
        style={{
          backgroundColor: isSticky ? '#959' : '#bb78',
          color: isSticky ? '#fff' : '#000',
          top: isSticky ? '0' : '40px',
          left: isSticky ? '0' : '20px',
          right: isSticky ? '0' : '20px',
          margin: isSticky ? '0' : '0 4rem',
          padding: '1.2rem 4rem',
          borderRadius: isSticky ? '0' : '10px',
          boxShadow: isSticky ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '',
        }}
      >
        <div className="logo">
          <span style={{ fontSize: '20px' }}>Todasmienten</span>
        </div>
        <ul className="navbar-nav">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sanciones">Sanciones</Link></li>
          <li><a href="#about">Quienes Somos</a></li>
          {/* <li><a href="#contact">Experiencia</a></li> */}
          <li><a href="#Contacto">Contacto</a></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;