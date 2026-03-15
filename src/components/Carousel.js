import React, { useState } from 'react';

const carouselData = [
    {
      id: 1,
      title: "GARITAS SOLARES",
      image: "https://fedesagency.com/solarCaseres/imgGaritas.jpg",
      description: "Artefactos exteriores que utilizan la energía solar que absorben del panel convirtiéndola en electricidad para recargar baterías de celulares y generar agua caliente.",
    },
    {
      id: 2,
      title: "PANELES SOLARES",
      image: "https://fedesagency.com/solarCaseres/imgPaneles.jpg",
      description: "Están compuestos por celdas fotovoltaicas que capturan la luz del sol y generan corriente continua. Esta corriente puede ser convertida en corriente alterna mediante un inversor para su uso en hogares, empresas y redes eléctricas.",
    },
    {
      id: 3,
      title: "TERMOTANQUES SOLARES",
      image: "https://fedesagency.com/solarCaseres/imgTermotanque.jpg",
      description: "Consisten en colectores solares que absorben la radiación solar y la transfieren al agua a través de tubos. El agua caliente es almacenada en un tanque aislado, listo para su uso en aplicaciones domésticas como duchas, lavabos y cocina.",
    },
    {
      id: 4,
      title: "CLIMATIZACIÓN DE PILETAS",
      image: "https://fedesagency.com/solarCaseres/imgPiletas.jpg",
      description: "El agua de la piscina circula a través de los colectores donde se calienta con la energía solar y luego regresa a la piscina, manteniendo una temperatura agradable sin necesidad de energía convencional.",
    },
    {
      id: 5,
      title: "SISTEMA DE MOLINOS EÓLICOS",
      image: "https://fedesagency.com/solarCaseres/imgMolino.jpg",
      description: "Los molinos eólicos o aerogeneradores generan electricidad a partir del viento, capturando la energía cinética del viento convirtiéndola en energía mecánica al hacer girar un rotor. Este rotor está conectado a un generador que convierte la energía mecánica en electricidad.",
    },
    {
      id: 6,
      title: "LUMINARIAS SOLARES",
      image: "https://fedesagency.com/solarCaseres/imgLuminaria.jpg",
      description: "Funcionan utilizando paneles solares para captar la energía del sol durante el día y almacenarla en baterías. Por la noche, las baterías alimentan las lámparas LED integradas en las luminarias, proporcionando iluminación sin necesidad de conexión a la red eléctrica.",
    },
    {
      id: 7,
      title: "TÓTEMS DE CARGA CELULAR",
      image: "https://fedesagency.com/solarCaseres/imgTotem.jpg",
      description: "Estos artefactos suelen estar ubicados en lugares públicos y tienen puertos USB o estaciones de carga inalámbrica. La energía solar se almacena en baterías que suministran la electricidad necesaria para la carga de los dispositivos.",
    },
    {
      id: 8,
      title: "BOMBAS SUMERGIBLES",
      image: "https://fedesagency.com/solarCaseres/imgBomba.jpg",
      description: "Se utilizan para riego, abastecimiento de agua potable y otras aplicaciones agrícolas y domésticas. Funcionan mediante paneles solares que suministran electricidad a la bomba. Ideales para áreas rurales o remotas donde no hay acceso a la red eléctrica.",
    },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = (currentIndex === 0) ? carouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex === carouselData.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        {/* Lista seleccionable para versión desktop */}
        <div className="carousel-selectable-list">
          
          {carouselData.map((item, index) => (

              
            <button
              key={item.id} 
              className={`carousel-selectable-item ${index === currentIndex ? 'active' : ''}`} 
              onClick={() => handleSelect(index)}
            >
              <img 
                alt="Imagen union carrusel" 
                src='https://fedesagency.com/solarCaseres/Union.png' 
                className="union-img" 
              />
              <p>{item.title}</p>
            </button>
          ))}
        </div>
        <div className='contenedorTituloYflechas'>
          <img 
            alt="Flecha izquierda" 
            src='https://fedesagency.com/solarCaseres/flechaIzquierda.png' 
            className="carousel-button prev" 
            onClick={handlePrev} 
          />
          <h2 className="carousel-title">{carouselData[currentIndex].title}</h2>
          <img 
            alt="Flecha Derecha" 
            src='https://fedesagency.com/solarCaseres/flechaDerecha.png' 
            className="carousel-button next" 
            onClick={handleNext} 
          />
        </div>
        <section>
          <img className="carousel-image" src={carouselData[currentIndex].image} alt={carouselData[currentIndex].title} />
          <p className="carousel-description">{carouselData[currentIndex].description}</p>
          <div className='buttonContainer'>
            <a href='#contact-form' className="info-button">Solicitar información
              <img 
                alt="Flecha Derecha" 
                src='https://fedesagency.com/solarCaseres/flechaDerechaBoton.png' 
                className="flechaBoton" 
              />
            </a>
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default Carousel;