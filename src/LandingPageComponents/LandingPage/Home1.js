import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import PS from '../images/Landing Page images/Landing Page/PS.jpg'

export default function Home1() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <div className='LandingPage'>
                    <section id="hero" className="hero d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src={PS} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">Problem Statement</h1>
                    <h2 data-aos="fade-up" data-aos-delay="400">
                        <ul>
                            <li>
                            Today, in our society there are lot of people who hesitate 
                            to perform banking through internet or to access bank 
                            services.
                            </li>
                        </ul>
                    </h2>
                    <h2 data-aos="fade-up" data-aos-delay="400">
                        <ul>
                            <li>
                            There could be many reasons like – trust issues, security 
                            issues, transparency, lack of knowledge to use it, etc.
                            </li>
                        </ul>
                    </h2>
                    <h2 data-aos="fade-up" data-aos-delay="400">
                        <ul>
                            <li>
                            Out of these problems, lack of knowledge is a drawback 
                            which doesn’t even give opportunity to explore this 
                            domain of banking. It is also a problem which can be 
                            tackled easily.
                            </li>
                        </ul>
                    </h2>
                    </div>
                </div>
            </div>

            </section>
        </div>
    </>
  )
}
