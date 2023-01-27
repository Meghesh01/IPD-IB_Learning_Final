import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './BeSafe.scss';
import { Link } from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png';
import greenlockImg2 from './greenlockImg2.jpg';
import img1Security from './img1Security.PNG';
import securityImg3 from './securityImg3.webp';
import phishingImg from './phishingImg.webp';
import neverShareImg from './neverShareImg.jpg';
import attackImg from './attackImg.webp';
import fakesms1 from './fakesms1.jpg';
import fakesms2 from './fakesms2.jpg';
import fakesms3 from './fakesms3.webp';

import fraudemail from './fraudemail.png';
import fakeemail from './fakeemail2.webp';


export default function BeSafe() {
  return (
    <div id="beSafe">
      <section>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img src={sbilogo} className="sbi-logo" alt="sbi" style={{ height: 40, marginRight: 7 }} />
              <b>BANK ONLINE</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="mx-5 justify-content-end">
              <Nav className="mx-9 fw-bold">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Language" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Levelspage">
                  <img src={logoutlogo} className="logout-logo" alt="log-out" style={{ height: 30, marginRight: 7 }} />
                  <b> Logout </b></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      <section className='nav-2' style={{ marginTop: 60 }} >
        <ul >
          <li><b>BE SAFE MODULE</b></li>
        </ul>
      </section>
      <section className='max-width'>
        <div className="safety">
        <p style={{fontFamily:"sans-serif", fontWeight:'bolder', fontSize:'18px', border: '1px solid black' , textAlign:'center'}}>Please ensure the following before logging into any website : </p>
        <ul>
          <li>The URL in your browser address bar begins with "https".
          <img src={img1Security} className="lock" alt="sbi" style={{ height: 40, marginRight: 7 , display:'block', marginTop:'20px', marginBottom:'20px'}} />
          </li>       
          <li>The address or status bar displays the padlock symbol.
          <img src={greenlockImg2} className="lock" alt="sbi" style={{ height: 40, marginRight: 7 ,display:'block', marginTop:'20px', marginBottom:'20px'}} />
          </li>
          <li>Click the padlock to view and verify the security certificate.</li>
          <img src={securityImg3} className="lock" alt="sbi" style={{ height: 300, marginRight: 7 ,display:'block', marginTop:'20px', marginBottom:'20px'}} />
          <li>The address bar turns green indicating that the site is secured with an SSL Certificate that meets the Extended Validation Standard.</li>
        </ul>
        </div>
        <div className="safety">
        <p style={{fontFamily:"sans-serif", fontWeight:'bolder', fontSize:'18px', border: '1px solid black' , textAlign:'center'}}>Major type of attacks that take places are PHISHING ATTACK on customers</p>
        <ul>
          <li>Phishing is a fraudulent attempt, usually made through email, phone calls, SMS etc seeking your personal and confidential information.
          <img src={phishingImg} className="lock" alt="sbi" style={{ height: 200, marginRight: 7 , display:'block', marginTop:'20px', marginBottom:'20px'}} />
          </li>       
          <li>State Bank or any of its representative never sends you email/SMS or calls you over phone to get your personal information,password or one time SMS (high security) password. So never share them with anyone
          <img src={neverShareImg} className="lock" alt="sbi" style={{ height: 200, marginRight: 7 ,display:'block', marginTop:'20px', marginBottom:'20px'}} />
          </li>
          <li>Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Never ever click on the links in such SMSs, emails, etc from bank.</li>
          <img src={attackImg} className="lock" alt="sbi" style={{ height: 300, marginRight: 7 ,display:'block', marginTop:'20px', marginBottom:'20px'}} />

          <li>Please report immediately on <a href="https://www.report.phishing@sbi.co.in" target={"_blank"} rel="noreferrer" >report.phishing@sbi.co.in</a> if you receive any such email/SMS or Phone call. </li>
          <br />
          
          <li>Examples of fraud SMS through bank : <b> NEVER CLICK ON THESE LINKS</b>
          <div>
          <img src={fakesms1} className="lock" alt="sbi" style={{ height: 300, marginRight: 7 ,display:'block', marginTop:'20px', marginBottom:'20px', display:'inline'}} />
          <img src={fakesms2} className="lock" alt="sbi" style={{ height: 300, width: 350, marginRight: 7 ,display:'block', marginTop:'20px', marginBottom:'20px', display:'inline'}} />
          <img src={fakesms3} className="lock" alt="sbi" style={{ height: 300, width : 450, marginRight: 7 ,display:'block', marginTop:'20px', marginBottom:'20px', display:'inline'}} />
          </div>
          </li>

          <li>Examples of fraud Emails through bank : <b> NEVER CLICK ON THESE LINKS</b>
          <div>
          <img src={fakeemail} className="lock" alt="sbi" style={{ height: 300, marginRight: 100 ,display:'block', marginTop:'20px', marginBottom:'20px', display:'inline'}} />
          <img src={fraudemail} className="lock" alt="sbi" style={{ height: 400, width:600, marginRight: 7 ,display:'block', marginTop:'20px', marginBottom:'20px', display:'inline'}} />
          </div>
          </li>
          <li><b>Thank you for reading. Be Safe and Happy Banking 😊!!!</b> </li>
        </ul>
        </div>
        <div className="list8">
          <ul>
            <li><button className='button-87' style={{marginLeft:'auto', marginRight:'auto'}}><b>See Live Demo of Phishing</b></button></li>
            <li><button className='button-87'><b>Complete and Continue</b></button></li>
          </ul>
        </div>
      </section>
    </div>

  )
}
