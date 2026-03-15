// src/components/ThankYou.js
import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const ThankYou = () => {
  return (
    <section className="headerBottom">
      <article className="headerTextArea thank">
        <div className="check-animation">
            <Player
              autoplay
              loop
              // Ajusta la ruta a tu JSON:
              // Si está en /public/video/solAnimacion.json, esta sería la ruta
              src="/video/solAnimacion.json"
              style={{ height: '330px', width: '330px' }}
            />
        </div>
        <h1 className="titleHeader thank">¡Gracias por tu mensaje!</h1>
        <p className="parrafoHeader thank">
          Nos pondremos en contacto contigo a la brevedad.
        </p>
      </article>
    </section>
  );
};

export default ThankYou;
