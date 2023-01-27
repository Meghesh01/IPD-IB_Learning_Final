import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import features from '../images/Landing Page images/Landing Page/Features.jpg'

export default function Features() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <section id="features" className="features">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <p>Features</p>
                </header>

                <div className="row">

                    <div className="col-lg-6">
                    {/* <img src="assets/img/Landing Page/Features.jpg" className="img-fluid" alt=""/> */}
                    <img src={features} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                    <div className="row align-self-center gy-4">

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>Multilingual website</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>User will get real-world banking experience</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>User will own a virtual debit card</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>Virtual passbook</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>Guide to each level</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>Audio and video support to each web page</h3>
                        </div>
                        </div>

                    </div>
                    </div>

                </div> 

            </div>

        </section>
    </>
  )
}
