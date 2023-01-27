import React from 'react'
import About from "./About";
import About1 from "./About1";
import Contact from "./Contact";
import Features from "./Features";
import Header from "./Header";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Home from "./Home";
import Home1 from "./Home1";

export default function LandingPage() {
  return (

        <>
        
              <div id="landing-page">
              <Header/>
                <Home/>
                <Home1/>
                <main id="main">
                    <About/>
                    <About1/>
                    <Testimonials/>
                    <Features/>
                    <Team/>
                    <Contact/>
                </main>
                <a href="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

            {/* <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/features" element={<Features />} />
                    <Route exact path="/team" element={<Team />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route path="/"><Home/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path="/features"><Features/></Route>
                    <Route path="/team"><Team/></Route>
                    <Route path="/contact"><Contact/></Route>
                </Routes>
            </Router> */}
        


              </div>

        </>
  )
}
