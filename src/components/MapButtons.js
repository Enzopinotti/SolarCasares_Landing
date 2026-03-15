import React from 'react';

const MapButtons = ({ selectedLocation, onLocationChange }) => {
  return (
    <div className="mapButtons">
      <button 
        className={`locationButtonUno ${selectedLocation === 'Casares' ? 'active' : ''}`} 
        onClick={() => onLocationChange('Casares')}
      >
        Solar Casares
      </button>
      <button 
        className={`locationButtonDos ${selectedLocation === 'RoquePerez' ? 'active' : ''}`} 
        onClick={() => onLocationChange('RoquePerez')}
      >
        Roque Perez
      </button>
    </div>
  );
};

export default MapButtons;
