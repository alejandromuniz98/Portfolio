import './Contacto.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SectionHeading from '../components/SectionHeading';

function Contacto() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('CV_Service', 'template_ftwt90q', form.current, 'hmLSjr_UV_3fwxjO4')
      .then(() => {
        alert('¡Mensaje enviado correctamente!');
        form.current.reset();
      })
      .catch(() => {
        alert('Se ha producido un error al mandar el mensaje');
      });
  }

  return (
    <div className="contacto container">
      <SectionHeading>Contacto</SectionHeading>

      <div className="contacto__layout">
        <form
          ref={form}
          className="contacto__form"
          onSubmit={sendEmail}
          aria-label="Formulario de contacto"
        >
          <div className="contacto__fields">
            <label className="contacto__label">
              Nombre
              <input className="contacto__input" type="text" name="nombre" required />
            </label>
            <label className="contacto__label">
              Teléfono
              <input className="contacto__input" type="tel" name="telefono" />
            </label>
            <label className="contacto__label">
              Correo electrónico
              <input className="contacto__input" type="email" name="email" required />
            </label>
            <label className="contacto__label">
              Asunto
              <input className="contacto__input" type="text" name="asunto" required />
            </label>
            <label className="contacto__label contacto__label--full">
              Mensaje
              <textarea className="contacto__textarea" name="mensaje" rows="5" required />
            </label>
          </div>
          <button type="submit" className="btn btn--filled contacto__submit">
            Enviar mensaje
          </button>
        </form>

        <div className="contacto__map-wrap">
          <iframe
            title="Ubicación en Gijón, Asturias"
            className="contacto__map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23142.666161462243!2d-5.653952506066903!3d43.52666945797061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1684681725638!5m2!1ses!2ses"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
