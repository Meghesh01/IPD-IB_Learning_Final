import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Level4.css";
import { Link } from "react-router-dom";
import sbilogo from "./sbi-logo.png";
import logoutlogo from "./logout.png";
import rupeeblack from "../images/rupeeblack.png";
import Modal from "react-bootstrap/Modal";
import L2_completedaudio from "./L2_completed_audio.mp3";
import partyPopper from "./party-popper.png";
import coins from "../images/coins.png";
import Button from "react-bootstrap/Button";
import bounceArrow from './bounce_arrow.png';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


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
          Level 4 Completed !!!
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

export default function QuickTransfer() {
  const audio5 = new Audio(L2_completedaudio);
  const [modalShow, setModalShow] = React.useState(false);
  const location = useLocation();
  let phone = location.state.phone;
  let beneficiaryaccountnumber = location.state.beneficiaryaccountnumber;
  let branch = location.state.branch;
  const navigate = useNavigate()
  const navigateLevelsPage = () => {
    navigate('/LevelsPage',{state: {phone:phone}});
  }

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
    <div id="QuickTransfer">
      <section>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={sbilogo}
                className="sbi-logo"
                alt="sbi"
                style={{ height: 40, marginRight: 7 }}
              />
              <b>BANK ONLINE</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="mx-5 justify-content-end"
            >
              <Nav className="mx-9 fw-bold">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Language" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    English
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Levelspage">
                  <img
                    src={logoutlogo}
                    className="logout-logo"
                    alt="log-out"
                    style={{ height: 30, marginRight: 7 }}
                  />
                  <b> Logout </b>
                </Nav.Link>
                {/* <Link to="/Levelspage">
            
              <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
               <b>Logout</b>
            
            </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      <section className="nav-2" style={{ marginTop: 60 }}>
        <ul>
          <li>
            <b>Transfer to Beneficiary</b>
          </li>
        </ul>
      </section>
      <section className="max-width">
        <div className="list1">
          <ul>
            <li>
              <b>Account Number</b>
            </li>
            <li>
              <b>Account type</b>
            </li>
            <li>
              <b>Branch</b>
            </li>
            <li>
              <b>Balance</b>
            </li>
          </ul>
          <hr className="hr"></hr>
        </div>
        <div className="list2">
          <ul>
            <li>
              <input type="radio" id="html" name="fav_language" value="HTML" checked/>{" "}
              2036155608
            </li>
            <li style={{marginLeft:'180px'}}>Savings</li>
            <li style={{marginLeft:'220px'}}>Vile parle</li>
            <li style={{marginLeft:'240px'}}>
              <img className="rupeeblack" src={rupeeblack} />
              54000
            </li>
          </ul>
        </div>
        <div className="list3">
          <ul>
            <li>
              <b>Selected account number :</b>
            </li>
            <li>2036155608</li>
          </ul>
        </div>
        <div className="list4">
          <ul>
            <li>
            <img
                src={bounceArrow}
                className="arrow bounce"
                alt="arrow"
                style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  rotate: '180deg',
                  backgroundSize: 'conatin',
                  animation: 'bounce 2s infinite',
                  marginTop: '-9px',
                  marginLeft: '-50px'
                }}
              />
              <b>Amount </b>:<input type="text" className="inp1" style={{marginRight:'1rem'}}/>
              INR
            </li>
            <li>
            <img
                src={bounceArrow}
                className="arrow bounce"
                alt="arrow"
                style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  rotate: '180deg',
                  backgroundSize: 'conatin',
                  animation: 'bounce 2s infinite',
                  marginTop: '-9px',
                  marginLeft: '-50px'
                }}
              />
              <b>Purpose </b>:{" "}
              <select className="dropdown" style={{marginLeft:'4rem'}}>
                <option>Select Purpose</option>
                <option>Fees</option>
                <option>Rent</option>
                <option>Bills</option>
                <option>Other</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="list1">
          <ul>
            <li>
              <b>Account Number</b>
            </li>
            <li style={{marginLeft:'9rem'}}>
              <b>Beneficiary Name </b>
            </li>
            <li style={{marginLeft:'9rem'}}>
              <b>Branch</b>
            </li>
            <li>
              <b>Bank</b>
            </li>
            <li>
              <b>Limit</b>
            </li>
          </ul>
          <hr className="hr"></hr>
        </div>
       
        <hr className="hr"></hr>
        <div className="list2">
          <ul>
            <li>
              <input type="checkbox" id="html" name="fav_language" value="HTML" checked/>{" "}
              {beneficiaryaccountnumber}
            </li>
            <li style={{marginLeft:'9.5rem'}}>Meghesh Nagpure</li>
            <li style={{marginLeft:'9.5rem'}}>{branch} </li>
            <li style={{marginLeft:'14rem'}}>
              <img className="rupeeblack" src={rupeeblack} />
              54000
            </li>
          </ul>
        </div>

        <div className="list7">
          <ul>
          <img
                src={bounceArrow}
                className="arrow bounce"
                alt="arrow"
                style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  rotate: '180deg',
                  backgroundSize: 'conatin',
                  animation: 'bounce 2s infinite',
                  marginTop: '-9px',
                  marginLeft: '-50px'
                }}
              />
            <li>
              <input type="checkbox" style={{marginLeft:'-1rem', marginRight:'1rem'}}/>
            </li>
            <li>I accept the terms and conditions</li>
          </ul>
        </div>
        <div className="list8">
          <ul>
            {/* <li><button className='button-87'><b>Submit</b></button></li> */}
            <li>
              <Button
                className="button-87"
                style={{ width: "100px", marginRight: "10px" }}
                onClick={(e) => {
                  window.alert("Successful Transfer to a beneficiary");
                  updatePoints();
                setModalShow(true) ; 
                audio5.loop = false; 
                audio5.play();
                }}
              >
                Submit
              </Button>
              <MyVerticallyCenteredModal 
                  phone = {phone}
                  show={modalShow}
                  // onHide={() => setModalShow(false)}
                />
            </li>
            <li>
              <button className="button-87">
                <b>Cancel</b>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
