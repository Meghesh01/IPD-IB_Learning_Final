import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import Header from './Header';
import WhatWeDo from '../images/Landing Page images/Landing Page/WhatWeDo2.png'
import Para1audioEnglish from "./Para1audioEnglish.mp3";
import Para1audioHindi from "./Para1audioHindi.mp3";

export default function Home() {
    const audio = new Audio(Para1audioEnglish);
    audio.loop = true;

    const audio1 = new Audio(Para1audioHindi);
    audio.loop = true;
    return (
        <>
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">

                            <h1 data-aos="fade-up">What we do ?</h1>
                            <div data-aos="fade-up">
                            <button className='playbutton'
                                    onClick={() => {
                                        audio.loop = false;
                                        audio.play();
                                    }}
                                >
                                    English
                                </button>
                                <button className='playbutton mx-3'
                                    onClick={() => {
                                        audio1.loop = false;
                                        audio1.play();
                                    }} 
                                >
                                    Hindi
                                </button>
                                {/* <button onClick={() => (audio.loop = false)}>Pause</button> */}
                            </div>
                            <h2 data-aos="fade-up" data-aos-delay="400">
                                Hello I am Meghesh New.
                                We have created an internet banking training platform (in a game format)
                                which will reduce the hesitation of people to bank through internet.
                                We help people understand basics of internet banking through our website in a fun way.
                            </h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div className="text-center text-lg-start">
                                    <a href="#" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Get Started</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            {/* <img src="assets/img/Landing Page/WhatWeDo2.png" className="img-fluid" alt=""/> */}
                            <img src={WhatWeDo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
