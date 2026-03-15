import React from 'react';

const ContactDetails = ({ address }) => {
  return (
    <div className="contactDetails">
      <div className="address">
        <img
          className="iconDetail"
          src="https://fedesagency.com/solarCaseres/iconoDireccion.svg"
          alt="dirección"
        />
        <p>{address}</p>
      </div>
      
      {/* Enlace a WhatsApp con mensaje predefinido */}
      <div className="phone">
        <img
          className="iconDetail"
          src="https://fedesagency.com/solarCaseres/iconoLlamada.svg"
          alt="teléfono"
        />
        <a
          href="https://api.whatsapp.com/send?phone=+542395402665&text=Estoy%20interesado%20en%20sus%20productos"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          2395-402665
        </a>
      </div>

      {/* Enlace a mailto con asunto y cuerpo predefinido */}
      <div className="email">
        <img
          className="iconDetail"
          src="https://fedesagency.com/solarCaseres/iconoEmail.svg"
          alt="email"
        />
        <a
          href="mailto:solarcasarres@gmail.com?subject=Consulta%20Solar%20Casares&body=Estoy%20interesado%20en%20sus%20productos"
        >
          solarcasarres@gmail.com
        </a>
      </div>
    </div>

  );
};

export default ContactDetails;