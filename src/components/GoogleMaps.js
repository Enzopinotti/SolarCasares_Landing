import React from 'react';

const GoogleMaps = ({ src, comingSoon }) => {
  return (
    <div className={`google-map ${comingSoon ? 'blurred' : ''}`}>
      {comingSoon ? (
        <>
          <iframe
          src={src}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
          <div className="coming-soon">Próximamente</div>
        </>
        
      ) : (
        <iframe
          src={src}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      )}
    </div>
  );
};

export default GoogleMaps;
