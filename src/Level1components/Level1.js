import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Level1.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import L1_img from './L1_img.PNG';
import captcha_img from './captcha_img.PNG';
import login_icon from './login_icon.png';
import volume_icon from './volume.png';
import sbilogo from './sbi-logo.png';
import bounceArrow from './bounce_arrow.png';
import partyPopper from './party-popper.png';
import coins from '../images/coins.png'

import L1_WelcomeAudio from "./L1_WelcomeAudio.mp3";
import UsernameAudio from "./Username_audio.mp3";
import PasswordAudio from "./Password_audio.mp3";
import CaptchaAudio from "./Captcha_audio.mp3";
import SubmitAudio from "./Submit_audio.mp3";
import L1_CompletedAudio from "./L1_Completed_audio.mp3";

import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ color: 'white', backgroundColor: 'black' }}>
        <Modal.Title id="contained-modal-title-vcenter" style={{ fontStyle: 'italic', marginLeft: '62px' }}>
          <img src={partyPopper} className="party_popper" alt="partypop" style={{ height: 40, marginRight: 10, marginBottom: 10 }} />
          CONGRATULATIONS
          <img src={partyPopper} className="party_popper" alt="partypop" style={{ height: 40, marginLeft: 10, marginBottom: 10 }} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'lightGreen', textAlign: 'center' }}>
        <h4 style={{ color: 'darkGreen', fontSize: '30px' }}>Level 1 Completed !!!</h4>
        <p style={{ fontSize: '20px' }} >
          Heartily Congratulations for your first victory. You have successfully learnt to login.
        </p>
        <p style={{ fontSize: '20px', textAlign: 'center' }} className="fw-bold">Coins Earned: <img src={coins} className="coins" alt="coin" style={{ height: '40px' }} /> 20 pts</p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Link to="/LevelsPage">
          <button type="button" class="btn btn-danger mx-2">Close</button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default function Level1() {

  const audio = new Audio(L1_WelcomeAudio);
  audio.play();
  
  const audio1 = new Audio(UsernameAudio);
  const audio2 = new Audio(PasswordAudio);
  const audio3 = new Audio(CaptchaAudio);
  const audio4 = new Audio(SubmitAudio);
  const audio5 = new Audio(L1_CompletedAudio);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div id="Level1">
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
                  <Nav.Link href="/">
                    <img src={login_icon} className="login_icon" alt="log-in" style={{ height: 30, marginRight: 7 }} />
                    <b> Login </b></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>

        <section style={{ marginTop: 60 }} >
          <ul className='nav-2' >

            <li>Login to your Account</li>
            <li id="redline">Dear Customer, Mandatory login and profile password change introduced for added security</li>
            <li>Welcome! User</li>
          </ul>
        </section>
        <section>
          <div class="row" style={{ alignContent: 'center' }}>
            <div class="column">
              <p id="redline">(CARE: Username and password are case sensitive.)</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>
                    Username*
                    <img src={volume_icon} className="volume_icon" alt="vol" style=
                      {{ height: '15px', marginLeft: '10px' }} onClick={() => { audio1.loop = false; audio1.play(); }}
                    />
                    <img src={bounceArrow} className="arrow bounce" alt="arrow" />
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Password*
                    <img src={volume_icon} className="volume_icon" alt="vol" style=
                      {{ height: '15px', marginLeft: '10px' }} onClick={() => { audio2.loop = false; audio2.play(); }}
                    />
                  </Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCaptcha">
                  <Form.Label>
                    Enter the text as shown in the image*
                    <img src={volume_icon} className="volume_icon" alt="vol" style=
                      {{ height: '15px', marginLeft: '10px' }} onClick={() => { audio3.loop = false; audio3.play(); }}
                    />
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                  <img src={captcha_img} className="captcha_img" alt="img_captcha" style={{ marginTop: '10px' }} />
                </Form.Group>

                <Button style={{ width: '100px', marginRight: '10px' }} onClick={() => {setModalShow(true) ; audio5.loop = false; audio5.play();} } >
                  Submit
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  // onHide={() => setModalShow(false)}
                />
                <Button variant="primary" type="reset" style={{ width: '100px', marginRight: '5px' }}>
                  Reset
                </Button>
                <img src={volume_icon} className="volume_icon" alt="vol" style=
                  {{ height: '15px', marginLeft: '10px' }} onClick={() => { audio4.loop = false; audio4.play(); }}
                />
                <p style={{ marginTop: '15px', fontSize: '13px' }}>OTP based login is mandatory. Please do not share OTP / Password / User information with anyone.</p>
              </Form>
            </div>
            <div class="column">
              <img src={L1_img} className="L1_img" alt="img2" style={{ width: '90%' }} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


