import Carousel from "react-multi-carousel";
import Image from 'next/image'
import 'react-multi-carousel/lib/styles.css';
import proyectos from '../data/proyectos.json'
import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";

function Portfolio(){
    const [item, setItem] = useState(null)
    const [show, setShow] = useState(false);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30
        }
    };

    const onHandleClickServicio = index =>{
        setItem(proyectos[index])
        setShow(true)
    }

    return(
        <section id="team" className="team">
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
                                    <h6><strong>{it.name}</strong>{it.descripcion && `: ${it.descripcion}`}</h6>
                                    <ul>
                                        {
                                            it.caracteristicas.map((sub, s)=>(
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

                <div className="section-title">
                    <h2>Proyectos</h2>
                    <p>Nuestros proyectos</p>
                </div>

                <Carousel 
                    responsive={responsive}
                    showDots={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    arrows={true}
                    draggable
                    focusOnSelect={false}
                    partialVisible
                    itemClass="carousel-item-padding-20-px"
                >
                    {
                        proyectos.map((item,i)=>(
                            <div className="d-flex align-items-stretch cursor-pointer" key={i} onClick={e=>onHandleClickServicio(i)}>
                                <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src={`/img/portfolio/${item.img}`} className="img-proyecto" alt="" width="330" height="330" />                            
                                </div>
                                <div className="member-info d-flex align-items-center">
                                    <h4 className="text-uppercase font-size-09rem">{item.name}</h4>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                    
                    {/* <div className="d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="100">
                        <div className="member-img">
                            <img src={"/img/team/team-1.jpg"} className="img-fluid" alt="" />   
                        </div>
                        <div className="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="100">
                        <div className="member-img">
                            <img src={"/img/team/team-1.jpg"} className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="100">
                        <div className="member-img">
                            <img src={"/img/team/team-1.jpg"} className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="100">
                        <div className="member-img">
                            <img src={"/img/team/team-1.jpg"} className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                        </div>
                        </div>
                    </div>   */}
                </Carousel>

            </div>
    </section>
    )

}

export default Portfolio