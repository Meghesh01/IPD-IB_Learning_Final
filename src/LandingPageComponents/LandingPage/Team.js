import React from 'react'
import '../Styles/style1.scss'
import team1 from '../images/team/team-1.jpg'
import team2 from '../images/team/team-2.jpg'
import team3 from '../images/team/team-3.jpg'

export default function Team() {
  return (
    <>
        <section id="team" className="team">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h2>Team</h2>
                        <p>Our hard working team</p>
                    </header>

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <div className="member-img">
                            <img src={team3} className="img-fluid" alt=""/>
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                            </div>
                            <div className="member-info">
                            <h4>Meghesh Nagpure</h4>
                            <span><b>Leader</b></span>
                            
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <div className="member-img">
                            <img src={team3} className="img-fluid" alt=""/>
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                            </div>
                            <div className="member-info">
                            <h4>Tejas Bhat</h4>
                            <span><b>Team Member</b></span>
                            
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <div className="member-img">
                            <img src={team3} className="img-fluid" alt=""/>
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                            </div>
                            <div className="member-info">
                            <h4>Rahul Kalathia</h4>
                            <span><b>Team Member</b></span>
                            
                            </div>
                        </div>
                        </div>

                        

                    </div>

                </div>

        </section>
    </>
  )
}
