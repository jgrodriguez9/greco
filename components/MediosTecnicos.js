import { Card, Col, Row } from "react-bootstrap"

function MediosTecnicos(){

    return(
        <section className="services bg-light">
            <div className="container" data-aos="fade-up">

                <div className="section-title mb-10px">
                    <h2>Medios técnicos</h2>
                    <p>Nuestros Medios Técnicos</p>
                    <Row>
                        <Col xs="12" md="6">
                            <Row>
                                <Col xs="12" md="12">
                                    <Card className="shadow-sm border-dark">
                                        <Card.Body>
                                            <h5 className="font-weight-bold">Vehículos de transporte y carga</h5>
                                            <ul className="list-unstyled ml-3">
                                                <li>Camioneta Fiat Strada 2013 color blanco</li>
                                                <li>Nissan 2008</li>
                                                <li>Nissan 2013</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs="12" md="12" className="mt-2">
                                    <Card className="shadow-sm border-dark">
                                        <Card.Body>
                                            <h5 className="font-weight-bold">Herramientas</h5>
                                            <ul className="list-unstyled ml-3">
                                                <li>Rotomartillos DEWALT 3KG. 2 Pzas</li>
                                                <li>Rotomartillos Demodelores de 10KG. 4 Pzas</li>
                                                <li>Taladros rotomartillos Bosh de 1/2 15 Pzas</li>
                                                <li>Taladros rotomartillos DEWALT inalámbricos 2 Pzas</li>
                                                <li>Esmeriladoras BOSH de 1/2 10 Pzas</li>
                                                <li>Escaleras de tijeras 6 peldaños 15 Pzas</li>
                                                <li>Escaleras de extensión 3 Pzas</li>
                                                <li>Tanque de gas de 4KG. 10 Pzas</li>
                                                <li>Generadores eléctricos 5500 WATTS 1Pza</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" md="6" className="mt-2 mt-md-0">
                            <Row>
                                <Col xs="12" md="12">
                                    <Card className="shadow-sm border-dark">
                                        <Card.Body>
                                            <h5 className="font-weight-bold">Oficinas</h5>
                                            <ul className="list-unstyled ml-3">
                                                <li>Calle arbolada MZA 16 Lote 1 Fraccionamiento Jardines del Sur 1</li>
                                                <li>Bodega</li>
                                                <li>Calle Antonio Enrique Savignac #824 Fraccionamiento Enrique Rangel SMZA 518</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs="12" md="12" className="mt-2">
                                    <Card className="shadow-sm border-dark">
                                        <Card.Body>
                                            <h5 className="font-weight-bold">Equipos de oficina</h5>
                                            <ul className="list-unstyled ml-3">
                                                <li>Laptop 10 Pzas</li>
                                                <li>Computadora de escritorio 4 Pzas</li>
                                                <li>Impresoras HP Deskjet 9800 2 Pzas</li>
                                                <li>Impresoras Y FAX modelo HP Office Jet 4533 2 Pzas</li>
                                                <li>Impresora Plotter HP Desginjet 510 1 Pza</li>
                                                <li>Impresora Laser Jet HP 1018 1 Pza</li>
                                                <li>Impresora Brother MFC-J6930DW Printer</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>                
            </div>
        </section>
    )
}

export default MediosTecnicos