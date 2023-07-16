import './Proyectos.css';


function Proyectos() {
    return (
        <div className='Proyectos'>
            <h2>Proyectos</h2>
            <div className="Proyectos_container">
                
                <div className="Proyectos_card">
                    <div className="Proyectos_card_sizes">
                        <div className="Proyectos_card_front">
                            <div id="Fluidos"/>
                        </div>
                        <div className="Proyectos_card_back">
                            <h1>Sistema de gestión de fluidos</h1>
                            <p>Aplicación instalada en pistolas dispensadoras de fluidos con el fin de controlar la cantidad suministrada para su posterior visualización en una página web. </p>
                        </div>
                    </div>
                </div>

                <div className="Proyectos_card">
                    <div className="Proyectos_card_sizes">
                        <div className="Proyectos_card_front">
                            <div id="Pago"/>
                        </div>
                        <div className="Proyectos_card_back">
                            <h1>Aplicación de pago por uso</h1>
                            <p>Sistema de despliegue de aplicaciones en la nube, el cual utiliza una pasarela de pago para cobrar suscripciones y mantener activa la aplicación contratada.</p>
                        </div>
                    </div>
                </div>

                <div className="Proyectos_card">
                    <div className="Proyectos_card_sizes">
                        <div className="Proyectos_card_front">
                            <div id="Alexa"/>
                        </div>
                        <div className="Proyectos_card_back">
                            <h1>Fomento de actividad física</h1>
                            <p>Aplicación para relojes inteligentes que controla la actividad física del usuario. Una skill de Alexa analiza los datos recogidos y propone rutinas para evitar el sedentarismo. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
