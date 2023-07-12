import './Curriculum.css';

function Curriculum() {
    return (
        <div className='Curriculum'>
            <h2>Curriculum</h2>
            <div className="Curriculum_container">
                <div className="Curriculum_formacion">
                    <h3>Educación</h3>
                    <div className="Curriculum_formacion_element">
                        <span className="Curriculum_element_lugar">Máster Universitario en Ingeniería Informática</span>
                        <span className="Curriculum_element_fecha">2020 - 2022</span>
                        <p>Universidad de Oviedo, Gijón</p>
                    </div>
                    <div className='Curriculum_line'></div>
                    <div className="Curriculum_formacion_element">
                        <span className="Curriculum_element_lugar">Grado en Ingeniería Informática en Tecnologías de la Información</span>
                        <span className="Curriculum_element_fecha">2016 - 2020</span>
                        <p>Universidad de Oviedo, Gijón</p>
                    </div>
                    <div className='Curriculum_line'></div>
                    <div className="Curriculum_formacion_element">
                        <span className="Curriculum_element_lugar">Bachiller Científico-Tecnológico </span>
                        <span className="Curriculum_element_fecha">2014 - 2016</span>
                        <p>I.E.S Fernández Vallín, Gijón</p>
                    </div>
                </div>

                <div className="Curriculum_experiencia">
                    <h3>Experiencia de trabajo</h3>
                    <div className="Curriculum_experiencia_element">
                        <span className="Curriculum_element_lugar">Esnova Software, Gijón</span>
                        <span className="Curriculum_element_fecha">Septiembre 2022 - Actualidad</span>
                        <h4>Desarrollador Software</h4>
                        <p>Desarrollo de aplicaciones en .NET Framework y React</p>
                    </div>
                    <div className='Curriculum_line'></div>
                    <div className="Curriculum_experiencia_element">
                        <span className="Curriculum_element_lugar">Futuver, Gijón</span>
                        <span className="Curriculum_element_fecha">Octubre 2021 - Junio 2022</span>
                        <h4>Estudiante en prácticas</h4>
                        <p> Desarrollo de aplicaciones en .NET Framework y Blazor</p>
                    </div>
                    <div className='Curriculum_line'></div>
                    <div className="Curriculum_experiencia_element">
                        <span className="Curriculum_element_lugar">Rodicar Hidráulica, Gijón</span>
                        <span className="Curriculum_element_fecha">Febrero 2020 - Julio 2020</span>
                        <h4>Estudiante en prácticas</h4>
                        <p>Desarrollo aplicaciones en QT Framework y React</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
