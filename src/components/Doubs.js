import React from 'react'
import CardList from './CardList.js'

const Doubs = () => {
  return (
    <div>
        <section id='testimonials' className='doubtsContainer'>
            <h2 className='subtitleDoubts uno'>Dudas frecuentes sobre la</h2>
            <h2 className='titleDoubts'>energía solar</h2>
            <CardList />
            <h2 className='boldTitleDoubts'>¿Listo para empezar?</h2>
            <p className='parrafoDoubts'>Te invitamos impulsar el futuro de tu negocio adoptando 
            la energía solar</p>
            <a href='#contact-form' className='buttonDoubs'>Solicitá una cotización</a>
        </section>
        
    </div>
  )
}

export default Doubs    