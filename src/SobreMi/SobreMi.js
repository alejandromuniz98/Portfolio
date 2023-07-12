import './SobreMi.css';
import {isMobile} from 'react-device-detect';

function SobreMi() {
    return (
        <div className='SobreMi'>
            <div className="SobreMi_intro">
                <h2>Sobre Mí</h2>
                <p>Hola, soy Alejandro Muñiz.
                    Soy un ingeniero informático con experiencia en el diseño y desarrollo de software y sistemas informáticos.
                    He trabajado en proyectos que me han permitido desarrollar habilidades principalmente en .NET Framework, React y manejo de bases de datos SQL.
                    Soy una persona proactiva y comprometida con mi trabajo, con habilidades para trabajar en equipo y capacidad
                    para adaptarme a diferentes situaciones. Me considero una persona responsable y organizada,
                    con capacidad para trabajar bajo presión y con orientación al logro.
                </p>
                <div className={isMobile==true?"SobreMi_row_displaycolumn":"SobreMi_row_displayrow"}>
                    <div className="SobreMi_column">
                        <h3>Datos Personales</h3>

                        <ul>
                            <li>
                                <strong>Fecha de nacimiento </strong>
                                07/09/1998
                            </li>
                            <li>
                                <strong>Teléfono </strong>
                                634507998
                            </li>
                            <li>
                                <strong>Email </strong>
                                alejandromb98@gmail.com
                            </li>
                            <li>
                                <strong>Página web </strong>
                                www.example.com
                            </li>
                            <li>
                                <strong>Lugar de residencia </strong>
                                Gijón, Asturias
                            </li>
                        </ul>
                    </div>

                    <div className="SobreMi_column">
                        <h3>Intereses</h3>

                        <div className='SobreMi_column_intereses'>
                            <div className="SobreMi_intereses">
                                <div className="SobreMi_intereses_item">
                                    <div id='Juegos'></div>
                                    <span>JUEGOS</span>
                                </div>
                                <div className="SobreMi_intereses_item">
                                    <div id="Musica"></div>
                                    <span>MÚSICA</span>
                                </div>
                                <div className="SobreMi_intereses_item">
                                    <div id="Viajar"></div>
                                    <span>VIAJAR</span>
                                </div>
                                <div className="SobreMi_intereses_item">
                                    <div id="Deporte"></div>
                                    <span>DEPORTE</span>
                                </div>
                                <div className="SobreMi_intereses_item">
                                    <div id="Naturaleza"></div>
                                    <span>NATURALEZA</span>
                                </div>
                                <div className="SobreMi_intereses_item">
                                    <div id="Fotografia"></div>
                                    <span>FOTOGRAFÍA</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreMi;
