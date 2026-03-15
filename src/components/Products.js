import React from 'react'
import Carousel from './Carousel.js';

const Products = () => {
  return (
    <div>
        <section id='products' className='productosContainer'>
        <h2 className='productosTitle'>Nuestros productos</h2>
        <p className='productosParrafo'>Te ofrecemos una amplia gama de dispositivos de energía solar que se adaptan a tus necesidades y estilo de vida. Desde paneles solares hasta sistemas de iluminación, tenemos todo lo que estás buscando.</p>
        <Carousel />
      </section>
    </div>
  )
}

export default Products