import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import vision from '../images/Landing Page images/Landing Page/Vision.jpg'

export default function About1() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <section id="about1" className="about">

            <div className="container" data-aos="fade-up">
                <div className="row gx-0">
                    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        {/* <img src="assets/img/Landing Page/Vision.jpg" className="img-fluid" alt=""/> */}
                        <img src={vision} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="content">
                        <h2>Vision</h2>
                        <p>
                            To make every possible citizen of our country literate about internet banking.
                        </p>
                    </div>
                    </div>


                </div>
            </div>

        </section>
    </>
  )
}
