import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <article className='logoYredes'>
          <img 
            src="https://fedesagency.com/solarCaseres/logoClaroSC2.png" 
            alt="Logo claro Solar Casares" 
            className='logo'
          />
          <ul className='redesSociales'>
            <a href='https://www.facebook.com/solarcasares'>
              <li>
                <img 
                  src="https://fedesagency.com/solarCaseres/facebookIcon.png" 
                  alt="Logo claro Solar Casares" 
                  className='logo'
                />
              </li>
            </a>
            
            <a href='https://www.instagram.com/solar.casares/'>
              <li>
                <img 
                  src="https://fedesagency.com/solarCaseres/instagramIcon.png" 
                  alt="Logo claro Solar Casares" 
                  className='logo'
                />
              </li>
            </a>
            
          </ul>
      </article>
      <article className='DerechosYpoliticas'>
        <div className='divFooter'>
          <p>Políticas de privacidad</p>
          <p className='bordeAbajo'>© 2024</p>
        </div>
        
        <p className='parrafoFinal'>Solar Casares- Todos los derechos reservados</p>
      </article>
    </footer>
  );
};

export default Footer;