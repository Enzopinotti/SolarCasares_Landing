import React from 'react';
import Card from './Card.js';

const cardData = [
  {
    title: "¿QUÉ TIPO DE ENERGÍA DA EL SOL?",
    description: (
      <div>
        <p>El sol brinda 3 tipos de energías:</p>
        <ul>
          <li><strong>Térmica</strong>, que aprovecha el aporte calorífico para calentar fluidos</li>
          <li><strong>Fotovoltaica</strong>, que obtiene electricidad a partir de la radiación solar</li>
          <li><strong>Pasiva</strong>, que aprovecha la energía del sol sin realizar transformaciones</li>
        </ul>
      </div>
    )
  },
  {
    title: "¿CUÁNTO DURAN LAS PLACAS SOLARES?",
    description: (
      <div>
        <p>Con un buen cuidado y mantenimiento, la vida útil de las placas solares puede extenderse hasta un plazo de <strong>25 años</strong>.</p>
      </div>
    )
  },
  {
    title: "¿QUÉ VENTAJAS TIENE EL USO DE PANELES SOLARES?",
    description: (
      <div>
        <ul>
          <li>No genera gases de efecto invernadero ni contamina</li>
          <li>Reducción de gastos en facturas de la luz</li>
          <li>Accesible en lugares remotos donde no llega la energía eléctrica</li>
          <li>Mientras haya sol, habrá energía solar</li>
        </ul>
      </div>
    )
  }
];

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
