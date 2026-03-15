// Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importar useLocation
import ThankYou from './ThankYou.js';                // El nuevo componente

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();  // Saber en qué ruta estoy

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Esto es la parte superior, SIEMPRE visible */}
      <section className='headerSup'>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src='https://fedesagency.com/solarCaseres/logoClaroSC2.png'
            alt='logo solar casares'
            style={{ cursor: 'pointer' }} 
            className='logo'
          />
        </Link>

        <ul className='navDesktop'>
          <li><a href="#about">Sobre nosotros</a></li>
          <li><a href="#products">Productos</a></li>
          <li><a href="#testimonials">Dudas frecuentes</a></li>
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#contact-form" className='quote-button'>Solicitá una cotización</a></li>
        </ul>

        <img
          src='https://fedesagency.com/solarCaseres/menuHamburguesa2.png'
          alt='Menu de Hamburguesas solar casares'
          onClick={toggleMenu}
          className='menu-icon'
        />
      </section>

      {/* Esto es la parte inferior del header, que cambia según la ruta */}
      {
        location.pathname === '/' ? (
          // Si estoy en '/', muestro "headerBottom" original
          <section className='headerBottom'>
            <article className='headerTextArea'>
              <h1 className='titleHeader'>Energía solar y soluciones hidráulicas para un futuro sostenible</h1>
              <p className='parrafoHeader'>Descubrí nuestros productos innovadores y eficientes</p>
            </article>
            <article className='buttonsContainer'>
              <a href="#products" className="buttonProduct">Ver productos</a>
              <a href="#contact-form" className="buttonInfo">Solicitar información</a>
            </article>
            
            {/* Menú móvil */}
            <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
              <section className='headerSup'>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src='https://fedesagency.com/solarCaseres/logoOscuroSC2.png'
                    alt='logo solar casares'
                    style={{ cursor: 'pointer' }}
                    className='logo_oscuro'
                  />
                </Link>
                <img
                  src='https://fedesagency.com/solarCaseres/menuHamburguesaOscuro2.png'
                  alt='Menu de Hamburguesas solar casares'
                  onClick={toggleMenu}
                  className='menu-icon'
                />
              </section>
              <ul>
                <li><a href="#about" onClick={toggleMenu}>Sobre nosotros</a></li>
                <li><a href="#products" onClick={toggleMenu}>Productos</a></li>
                <li><a href="#testimonials" onClick={toggleMenu}>Dudas frecuentes</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
                <li><a href="#contact-form" onClick={toggleMenu} className='quote-button'>Solicitá una cotización</a></li>
              </ul>
            </nav>
          </section>
        ) : location.pathname === '/thank-you' ? (
          // Si estoy en '/thank-you', muestro "ThankYou"
          <ThankYou />
        ) : null
      }
    </header>
  );
};

export default Header;
