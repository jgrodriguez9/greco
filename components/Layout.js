import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";

export const siteTitle = 'Greco'
function Layout({children}){
    const [stickyClass, setStickyClass] = useState("");
    const [imgClass, setImgClass] = useState("img-h80px");

    useEffect(()=>{
        const onScroll = () => {
            const scrollPosition = window.scrollY;
              if(scrollPosition > 300 ) { 
                setStickyClass('header-scrolled')
                setImgClass("img-h40px")
              }else{
                setStickyClass("")
                setImgClass("img-h80px")
              }
          };
          window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])


    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Greco"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            

            <header id="header" className={`fixed-top ${stickyClass}`}>
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo">
                        <a href="index.html">
                            <Image src={"greco.svg"} fluid alt="" className={`${imgClass}`} /> 
                            {/* Gp<span>.</span> */}
                        </a>
                    </h1>

                    <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#team">Team</a></li>                    
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                    </nav>
                </div>                
            </header>

            <section id="hero" className="d-flex align-items-center justify-content-center">
                <div className="container" data-aos="fade-up">

                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div className="col-xl-9 col-lg-10">
                    <h1>Transformando el espacio en sueños hechos realidad<span>.</span></h1>
                    {/* <h2>We are team of talanted digital marketers</h2> */}
                    </div>
                </div>

                <div className="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="icon-box">
                        <i className="ri-store-line"></i>
                        <h3><a href="">Innovación</a></h3>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-4 col-6 ">
                    <div className="icon-box">
                        <i className="ri-bar-chart-box-line"></i>
                        <h3><a href="">Control</a></h3>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
                    <div className="icon-box">
                        <i className="ri-calendar-todo-line"></i>
                        <h3><a href="">Creatividad</a></h3>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
                    <div className="icon-box">
                        <i className="ri-paint-brush-line"></i>
                        <h3><a href="">Ineterés</a></h3>
                    </div>
                    </div>
                    <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
                    <div className="icon-box">
                        <i className="ri-database-2-line"></i>
                        <h3><a href="">Compromiso</a></h3>
                    </div>
                    </div>
                </div>

                </div>
            </section>
            
            <main id="main">{children}</main>            


            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>Gp<span>.</span></h3>
                                    <p>
                                        A108 Adam Street <br />
                                        NY 535022, USA<br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </footer>

            
        </>
    )
}

export default Layout