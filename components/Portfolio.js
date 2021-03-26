import Carousel from "react-multi-carousel";
import Image from 'next/image'
import 'react-multi-carousel/lib/styles.css';

function Portfolio(){
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

    return(
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Check our Portfolio</p>
                </div>

                <Carousel 
                    responsive={responsive}
                    showDots={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
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
                    <div className="d-flex align-items-stretch" onClick={e=>setModal1(true)}>
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
                </Carousel>

            </div>
    </section>
    )

}

export default Portfolio