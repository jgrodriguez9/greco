function AboutUs(){
    return(
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    <img src="/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3 className="text-uppercase">Quienes Somos</h3>                    
                    <p>
                    Somos unas empresa con más de 10 años de experiencia, acreditada y comprometida con la industria de la construcción, 
                    siendo nuestro campo de aplicación dentro de la misma, la elaboración de proyectos, presupuestos, programas de obra,
                     así como la ejecución de instalaciones eléctricas, hidráulicas, sanitarias, detección y extinción
                     de incendios, automatización y gas.
                    </p>
                </div>
                </div>

            </div>
            </section>
    )
}

export default AboutUs