import { Col, Row } from 'react-bootstrap'
import obras from '../data/obras.json'

function CallUs(){
    return(
        <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">

                <div className="text-center">
                    <h3 className="pb-3">OBRAS REALIZADAS</h3>
                </div>

                <Row className="text-white">
                    {
                        obras.map((item, i)=>(
                            <Col xs="12" md="6" key={i} className="mb-4 text-center">
                                <span className="d-block d-md-inline box-1 p-1 px-3 w-auto cursor-normal box-hover">{item}</span>
                            </Col>                            
                        ))
                    }
                </Row>

            </div>
        </section>
    )
}

export default CallUs