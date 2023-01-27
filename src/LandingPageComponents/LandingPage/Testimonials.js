import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'

// import Swiper core and required modules
import SwiperCore,{ Navigation, Pagination, Scrollbar} from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import test1 from '../images/Landing\ Page\ images/testimonials/testimonials-1.jpg'
import test2 from '../images/Landing\ Page\ images/testimonials/testimonials-2.jpg'
import test3 from '../images/Landing\ Page\ images/testimonials/testimonials-3.jpg'
import test4 from '../images/Landing\ Page\ images/testimonials/testimonials-4.jpg'

SwiperCore.use([Navigation,Pagination,Scrollbar])

export default function Testimonials() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <section id="testimonials" className="testimonials">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <p>Happy Learners</p>
                </header>

                <div data-aos="fade-up" data-aos-delay="200">
                    

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="testimonials-slider "
                    >
                        
                            <SwiperSlide>
                                <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test1} className="testimonial-img" alt=""/>
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>
                                </div>
                            </SwiperSlide>
                        

                            <SwiperSlide>
                                <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test2} className="testimonial-img" alt=""/>
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                                </div>
                            </SwiperSlide>
                        

                        
                            <SwiperSlide>
                                <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test3} className="testimonial-img" alt=""/>
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                                </div>
                            </SwiperSlide>
                        

                        
                            <SwiperSlide>
                                <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test4} className="testimonial-img" alt=""/>
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                                </div>
                            </SwiperSlide>
                        

                        
                            <SwiperSlide>
                                <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                </p>
                                <div className="profile mt-auto">
                                    <img src={test4} className="testimonial-img" alt=""/>
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                                </div>
                            </SwiperSlide>
                    </Swiper>
                    
                </div>

            </div>

        </section>
    </>
  )
}
