import './Footer.css';


function Footer() {
    return (
        <div className='Footer'>
                <a href="#inicio" className="Footer_boton">
                    <div className='Footer_boton_image'/>
                </a>
                <div className='Footer_content'>
                    <h6>
                   Alejandro Muñiz Berdasco©
                    </h6>

                <div className="Footer_redes">
                    <a className="Footer_redes_icon" id='linkedin' href="//www.linkedin.com/in/alejandro-muniz-ber"/>
                    <a className="Footer_redes_icon" id='github' href="//www.github.com/alejandromuniz98"/>
                    <a className="Footer_redes_icon" id='gmail' href = "mailto: alejandromb98@gmail.com"/>
                </div>
                </div>
        </div>
    );
}

export default Footer;
