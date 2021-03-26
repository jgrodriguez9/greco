import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import servicios from '../data/servicios.json';
import { getIconServicios } from "../utils/getIconServicios";

function OurServices(){
    const [show, setShow] = useState(false);
    const [item, setItem] = useState(null)

    const onHandleClickServicio = index =>{
        setItem(servicios[index])
        setShow(true)
    }


    return(
        <section id="services" className="services">
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {
                            item && item.name
                        }
                    </Modal.Title>
                </Modal.Header>
                {item && <Modal.Body>
                    <Row>
                        {
                            item.categoria.map((it, i)=>(
                                <Col xs="12" md="12" key={i}>
                                    <h6 className="font-weight-bold">{it.name}</h6>
                                    <ul>
                                        {
                                            it.subcategorias.map((sub, s)=>(
                                                <li key={s}>{sub}</li>
                                            ))
                                        }
                                    </ul>
                                </Col>
                            ))
                        }
                        
                    </Row>
                </Modal.Body>}
            </Modal>
            <div className="container" data-aos="fade-up">

                <div className="section-title mb-10px">
                    <h2>Servicios</h2>
                    <p>Nuestros Servicios</p>
                    <span className="d-block lh-12 mb-2">
                        En la obra civil se realizan proyectos,cálculos de mecánica de suelos, estructurales, cimentaciones, presupuestos,
                        coordinación de obra, ejecución de acabados, tabla-roca, recubrimientos, carpintería, aluminio, acero estructural,
                        aplicado a la industria hotelera, restaurantera, comercial y residencial.
                    </span>
                    <span className="d-block lh-12">
                        Dentro de las instalaciones electromecánicas se realizan proyectos, controles de obra, presupuestos y ejecución de las
                        siguientes actividades, aplicables en plantas y baves industriales, aeropuertos, centro comerciales, deportivos,
                        hospitales, hoteles, oficinas, condominios, bancos y casas habitación.
                    </span>
                </div>

                <Row>
                    {
                        servicios.map((item,i)=>(
                            <Col xs="12" md="6" key={i} className="mt-4">    
                                <div className="icon-box">
                                    <div className="icon">
                                        {getIconServicios(item.icon)}
                                    </div>
                                    <h4 className="cursor-pointer" onClick={e=>onHandleClickServicio(i)}>{item.name}</h4>
                                </div>
                            </Col>
                        ))
                    }
                    
                </Row>

                {/* <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4><a href="">Instalaciones eléctricas</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-file"></i></div>
                        <h4><a href="">Instalaciones sanitarias</a></h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-tachometer"></i></div>
                        <h4><a href="">Instalaciones hidráulicas</a></h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-world"></i></div>
                        <h4><a href="">Instalaciones de gas</a></h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                </div> */}

            </div>
            </section>
    )
}

export default OurServices