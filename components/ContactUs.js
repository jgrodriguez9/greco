import { Row } from "react-bootstrap";
import { AiOutlineMail, AiOutlineMobile, AiOutlineUser } from "react-icons/ai";

function ContactUs(){
    return(
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contacto</h2>
                    <p>Contáctanos</p>
                </div>

                <div className="d-flex flex-md-row flex-column mt-3 justify-content-md-between justify-content-center info">
                    <div>
                        <AiOutlineUser />
                        <h4>CEO</h4>
                        <p>Sergio Navarro Desales</p>
                    </div>
                    <div>
                        <AiOutlineMail />
                        <h4>Correo electrónico</h4>
                        <p>sergio.navarro@prodigy.net.mx</p>
                    </div>

                    <div>
                        <AiOutlineMobile />
                        <h4>LLámanos</h4>
                        <p>998 214 5068</p>
                    </div>
                </div>

                <div className="d-flex flex-md-row flex-column mt-5 justify-content-md-around justify-content-center">
                    <div className="text-md-center text-left">
                        <label className="d-block text-red  font-1-5rem mb-0">Razón social</label>
                        <span className="d-block text-uppercase text-blue  font-1-5rem">GRECO INGENIERíA Y PROYECTOS S.A. DE CV.</span>
                    </div>
                    <div className="text-md-center text-left">
                        <label className="d-block text-red  font-1-5rem mb-0">RFC</label>
                        <span className="d-block text-uppercase text-blue  font-1-5rem">GIPO90603PP5.</span>
                    </div>
                </div>

               

                {/* <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <AiOutlineUser />
                                <h4>CEO</h4>
                                <p>Sergio Navarro Desales</p>
                            </div>

                            <div className="email">
                                <AiOutlineMail />
                                <h4>Correo electrónico:</h4>
                                <p>sergio.navarro@prodigy.net.mx</p>
                            </div>

                            <div className="phone">
                                <AiOutlineMobile />
                                <h4>LLámanos:</h4>
                                <p>998 214 5068</p>
                            </div>

                        </div>

                    </div>
                </div> */}

            </div>
            </section>
    )
}

export default ContactUs