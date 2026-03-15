import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; 

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Reemplaza esto con tu ID de Formspree (prepáralo en formspree.io)
  // Es la forma más limpia para tu portfolio sin usar .env
  const FORMSPREE_URL = "https://formspree.io/f/XXXXX"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar a Formspree (llega directo a tu mail enzopinottii@gmail.com)
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // SweetAlert
        Swal.fire({
          title: '¡Gracias por consultar!',
          text: 'Te responderemos a la brevedad.',
          icon: 'success',
          confirmButtonColor: '#FFCC33'
        });

        // Limpiar formulario y navegar
        setFormData({ name: '', email: '', phone: '', message: '' });
        navigate('/thank-you');
      } else {
        throw new Error('Error en el envío');
      }

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo enviar el mensaje. Por favor intenta de nuevo.',
        icon: 'error'
      });
    }
  };

  return (
    <form id='contact-form' className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre y Apellido</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Juan Perez"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="juanperez@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="1234-567890"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hola, estoy interesado en sus productos."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className='botonForm' type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
