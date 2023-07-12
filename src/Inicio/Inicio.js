import './Inicio.css';
import CV from '../../src/CV-Alejandro.pdf'


function Inicio() {

  return (
    <div className='Inicio'>
      <div className="Inicio_banner">
        <div className="Inicio_imagen"/>
        <h1>ALEJANDRO MUÑIZ BERDASCO</h1>
        <h2>Ingeniero Informático</h2>
        <div className="Inicio_redes">
          <a className="Inicio_redes_icon" id='linkedin' href="//www.linkedin.com/in/alejandro-muniz-ber"/>
          <a className="Inicio_redes_icon" id='github' href="//www.github.com/alejandromuniz98"/>
          <a className="Inicio_redes_icon" id='gmail' href = "mailto: alejandromb98@gmail.com"/>
        </div>
        <a href={CV} className="Inicio_botonCV" download="CV-Alejandro.pdf">Descargar CV</a>
      </div>
    </div>
  );
}

export default Inicio;
