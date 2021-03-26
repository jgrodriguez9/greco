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
            </div>
            </section>
    )
}

export default OurServices