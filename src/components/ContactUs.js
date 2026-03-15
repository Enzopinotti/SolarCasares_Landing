import React, { useState } from 'react';
import ContactForm from './ContactForm.js';
import GoogleMaps from './GoogleMaps.js';
import MapButtons from './MapButtons.js';
import ContactDetails from './ContactDetails.js';

const ContactUs = () => {
  const [selectedLocation, setSelectedLocation] = useState('Casares');

  const locations = {
    Casares: {
      address: 'Las Heras 282, Carlos Casares',
      iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.159535236274!2d-61.369285324410974!3d-35.62379337260589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c0822e13ce352f%3A0x3791a9851c12ff1c!2sLas%20Heras%20282%2C%20Carlos%20Casares%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1722446340730!5m2!1ses-419!2sar',
      comingSoon: false
    },
    RoquePerez: {
      address: 'Próximamente',
      iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.159535236274!2d-61.369285324410974!3d-35.62379337260589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c0822e13ce352f%3A0x3791a9851c12ff1c!2sLas%20Heras%20282%2C%20Carlos%20Casares%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1722446340730!5m2!1ses-419!2sar',
      comingSoon: true
    }
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <section id='contact' className="contactContainer">
        <h2 className="contactTitle">Contactanos</h2>
        <p className="contactParrafo">
          Unite a la revolución solar y contribuí a un futuro más verde y sostenible.
          Contactate con nosotros y te responderemos en la brevedad.
        </p>
        
        <div className='contenedorUno'>
          <ContactForm />
          <div className='contenedorDos'>
            <MapButtons selectedLocation={selectedLocation} onLocationChange={handleLocationChange} />
            <GoogleMaps src={locations[selectedLocation].iframeSrc} comingSoon={locations[selectedLocation].comingSoon} />
          </div>
        </div>
        <ContactDetails address={locations[selectedLocation].address} />
      </section>
    </div>
  );
};

export default ContactUs;