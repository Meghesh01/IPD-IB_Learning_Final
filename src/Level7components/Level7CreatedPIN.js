import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Level6components/Level6.scss'
import { Link} from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png'
import './radio-1.scss';
import './alert-1.scss';
import './list8.scss';

import Modal from "react-bootstrap/Modal";
import partyPopper from "../images/party-popper.png";
import coins from "../images/coins.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  
  const navigate = useNavigate()
  const navigateLevelsPage = () => {
    navigate('/LevelsPage',{state: {phone:props.phone}});
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ color: "white", backgroundColor: "black" }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontStyle: "italic", marginLeft: "62px" }}
        >
          <img
            src={partyPopper}
            className="party_popper"
            alt="partypop"
            style={{ height: 40, marginRight: 10, marginBottom: 10 }}
          />
          CONGRATULATIONS
          <img
            src={partyPopper}
            className="party_popper"
            alt="partypop"
            style={{ height: 40, marginLeft: 10, marginBottom: 10 }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ backgroundColor: "lightGreen", textAlign: "center" }}
      >
        <h4 style={{ color: "darkGreen", fontSize: "30px" }}>
          Level 7 Completed !!!
        </h4>
        <p style={{ fontSize: "20px" }}>
          Heartily Congratulations for your first victory. You have successfully
          learnt to login.
        </p>
        <p
          style={{ fontSize: "20px", textAlign: "center" }}
          className="fw-bold"
        >
          Coins Earned:{" "}
          <img
            src={coins}
            className="coins"
            alt="coin"
            style={{ height: "40px" }}
          />{" "}
          50 pts
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <Link to="/LevelsPage"> */}
          <button type="button" onClick = {navigateLevelsPage} class="btn btn-danger mx-2">
            Close
          </button>
        {/* </Link> */}
      </Modal.Footer>
    </Modal>
  );
}

export default function Level7CreatedPIN() {
  const location = useLocation();
  let phone = location.state.phone;
  const [modalShow, setModalShow] = React.useState(false);
  const [points, setPoints] = useState(null);

  const updatePoints = async () => {
    const response = await fetch('updatepoints', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone })
    });

    const data = await response.json();
    setPoints(data.points);
  };
  return (
    <>
        <div id="level-6">
      <section>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
        <img src={sbilogo} className="sbi-logo" alt="sbi" style={{height : 40 , marginRight: 7}}/>
              <b>BANK ONLINE</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="mx-5 justify-content-end">
          <Nav className="mx-9 fw-bold">
          <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Levelspage">
            <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
            <b> Logout </b></Nav.Link>
            {/* <Link to="/Levelspage">
            
              <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
               <b>Logout</b>
            
            </Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>

    <section className='nav-2' style={{ marginTop: 60 }} >
        <ul >
            <li><b>DEBIT CARD ACTIVATION / PIN GENERATION</b></li>
            </ul>
    </section>
    
   </div>
   <div id='level-8'>
        <div className="container bg-light d-md-flex align-items-center">
   
   <div className="card box2 shadow-sm">
      <div className="d-flex align-items-center justify-content-between p-4">
         <span className="h5 fw-bold m-0">ATM PIN GENERATION</span> 
         <div className="btn btn-primary bar"><span className="fas fa-bars"></span></div>
      </div>
      
      <div id="alert-1">
      <div className="row" style={{ paddingTop: 0 }}>
         <div className="row col container" style={{ paddingTop: 0 }}>
            <div className="col row container" style={{ paddingTop: 0 }}>
            <div className="col container" style={{ marginTop: 0 }}>
            <a onClick={()=>{updatePoints();
                setModalShow(true) ; 
                // audio5.loop = false; 
                // audio5.play();
                }} class="alert alert-general">
                  <MyVerticallyCenteredModal 
                  phone = {phone}
                  
                  show={modalShow}
                  // onHide={() => setModalShow(false)}
                />
            <i class="fas fa-info" style={{ paddingRight: 10 }}></i>  New ATM Pin number has been updated succesfully. In case of PIN generated of new ATM Card, Kindly perform your first transaction at any Banks's ATM  
            </a>
            </div>
            </div>
         </div>
      </div>
      </div>
   </div>
</div>
        </div>

    </>
  
  )
}
