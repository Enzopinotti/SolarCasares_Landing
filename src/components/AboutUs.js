import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <section id="about" className='nosotrosContainer'>
        <article className='textArea'>
          <h2 className='titleNosotros'>¿Por qué nosotros?</h2>
          <p className='parrafoNosotros'>Nos especializamos en la instalación de paneles solares de alta calidad para maximizar la producción de energía limpia y sostenible. En Solar Casares, creemos firmemente que la energía solar no solamente ilumina hogares, sino también el camino hacia un futuro más sostenible.</p>
          <p className='parrafoNosotros dos'><strong>Nuestra misión:</strong> Impulsar el desarrollo sostenible a través de las energías renovables.</p>
        </article>
        
        <article className='iconsContainer'>
          <div className='iconos1'>
            <img alt="Icono de Energia" src='https://fedesagency.com/solarCaseres/iconoEnergia2.png' />
            <img alt="Icono de Tecnología" src='https://fedesagency.com/solarCaseres/iconoTecnologia2.png' />
          </div>
          <div className='iconos2'>
            <img alt="Icono de Soporte" src='https://fedesagency.com/solarCaseres/iconoSoporte2.png' />
            <img alt="Icono de Instalación" src='https://fedesagency.com/solarCaseres/iconoInstalacion2.png' />
          </div>
        </article>
      </section>
    </div>
  )
}

export default AboutUs