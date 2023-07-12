import './Contacto.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import {isMobile} from 'react-device-detect';

function Contacto() {
    const form = useRef();

    function sendEmail() {

        emailjs.sendForm('CV_Service', 'template_ftwt90q', form.current, '_88uiu79wdHX_29ou')
            .then((result) => {
                alert("¡Mensaje enviado correctamente!")
                form.current.reset()
            }, (error) => {
                alert("Se ha producido un error al mandar el mensaje")
            });

    };

    return (
        <div className='Contacto'>
            <h2>Contacto</h2>
            <div className={isMobile==false?"Contacto_container_row":"Contacto_container_column"}>

                <div className={isMobile==false?"Contacto_form":"Contacto_form_responsive"}>
                    <form ref={form}className='Contacto_form_form'>
                        <div className="Contacto_form_data">
                            <input className='Contacto_form_input' type="text" placeholder="Nombre" name='nombre' />
                            <input className='Contacto_form_input' type="text" placeholder="Número de teléfono" name='telefono' />
                            <input className='Contacto_form_input' type="text" placeholder="Correo electrónico" name='email' />
                            <input className='Contacto_form_input' type="text" placeholder="Asunto" name='asunto' />
                            <textarea className='Contacto_form_textarea' cols="30" rows="10" placeholder="Mensaje" name='mensaje'></textarea>
                        </div>
                        <div className='Contacto_boton' onClick={sendEmail}>
                            <a><span>Enviar Mensaje</span></a>
                        </div>
                    </form>
                </div>

                <div className={isMobile==false?"Contacto_map":"Contacto_map_responsive"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23142.666161462243!2d-5.653952506066903!3d43.52666945797061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1684681725638!5m2!1ses!2ses"
                        width='60%'
                        height='80%'>
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
