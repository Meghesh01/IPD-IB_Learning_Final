import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import rural from '../images/Landing Page images/Landing Page/rural-enhanced.png' 


export default function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <section id="about" className="about">

            <div className="container" data-aos="fade-up">
                <div className="row gx-0">

                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="content">
                            <h2>Mission</h2>
                            <p>
                                We want to provide the best experience for all our students to learn about internet banking in a fun way. 
                                This will help them to do banking tasks in a much easier and faster way in the real world.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                    {/* <img src="assets/img/Landing Page/rural-enhanced.png" className="img-fluid" alt=""/> */}
                    <img src={rural} className="img-fluid" alt=""/>
                    </div>

                </div>
            </div>

        </section>
    </>
  )
}
