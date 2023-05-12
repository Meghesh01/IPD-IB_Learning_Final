import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Level3.scss';
import { Link } from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png'
import { useNavigate } from "react-router-dom";
import bounceArrow from './bounce_arrow.png';
import volume_icon from "./volume.png";


import BeneficiaryNameAudio from '../Level2components/BeneficiaryNameAudio.mp3';
import BeneficiaryAccountNumberAudio from '../Level2components/BeneficiaryAccountNumberAudio.mp3';
import ReEnterAudio from '../Level2components/ReEnter.mp3';
import BranchNameAudio from './BranchNameAudio.mp3';
import TransferLimitAudio from './TransferLimitAudio.mp3';
import TermsAudio from './TermsAudio.mp3';


export default function Level3() {


  const audio1 = new Audio(BeneficiaryNameAudio);
  const audio2 = new Audio(BeneficiaryAccountNumberAudio);
  const audio3 = new Audio(ReEnterAudio);
  const audio4 = new Audio(BranchNameAudio);
  const audio5 = new Audio(TransferLimitAudio);
  const audio6 = new Audio(TermsAudio);


  const navigate = useNavigate();

  const [level3, setLevel3] = useState({
    name: "",
    accountnumber: "",

    beneficiaryaccountnumber: "",
    branch: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLevel3({ ...level3, [name]: value });
  };

  const PostData = async (e) => {
    const { name, accountnumber, beneficiaryaccountnumber, branch } =
      level3;

    const res = await fetch("/level3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({

        name,
        accountnumber,

        beneficiaryaccountnumber,
        branch,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Successfully Added beneficiary");
      console.log("Successful registration");

      // navigate("/Levelspage");
    }
  };

  
  return (
    <div id="Level3">
      <div>
        <section>
          <Navbar bg="light" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="#home">
                <img src={sbilogo} className="sbi-logo" alt="sbi" style={{ height: 48, marginRight: 7 }} />
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
            <li><b>ADD BENEFICIARY</b></li>
          </ul>
        </section>
        <section className='max-width'>
          <div className='list1'>
            <ul>
              <li><b>ADD</b></li>
              <li><b>MODIFY</b></li>
              <li><b>DELETE</b></li>
              <li><b>VIEW</b></li>
            </ul>
            <hr className='hr'></hr>
          </div>
          <div className='list4'>
            <ul>
              <li className='field'><b>Name </b>:
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio1.loop = false;
                  audio1.play();
                }}
              />
              <img
                src={bounceArrow}
                className="arrow bounce"
                alt="arrow"
                style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  rotate: '-90deg',
                  backgroundSize: 'conatin',
                  animation: 'bounce 2s infinite',
                  marginTop: '-40px',
                  marginLeft: '-30px'
                }}
              />
                <input type="text" className='inp1' name="name"
                  value={level3.name}
                  onChange={handleInputs}/>
              </li>
              <li><b>Account Number</b> :
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio2.loop = false;
                  audio2.play();
                }}
              />
              <input type="text" className='inp2' name="accountnumber"
                value={level3.accountnumber}
                onChange={handleInputs} /></li>
              <li><b>Beneficiary Account Number</b> :
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio3.loop = false;
                  audio3.play();
                }}
              />
              <input type="text" className='inp3' name="beneficiaryaccountnumber"
                value={level3.beneficiaryaccountnumber}
                onChange={handleInputs} /> </li>
             
              
            
              <li><b>Branch</b> :
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio4.loop = false;
                  audio4.play();
                }}
              />
              <input type="text" className='inp6' name="branch"
                value={level3.branch}
                onChange={handleInputs}
              /></li>
              <li><b>Transfer Limit</b> :
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio5.loop = false;
                  audio5.play();
                }}
              />
              <input type="text" className='inp7' /> </li>
            </ul>
          </div>


          <div className='list7'>
            <ul>
              <li><input type="checkbox" /></li>
              <li>I accept the terms and conditions</li>
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer',marginTop:'6px' }}
                onClick={() => {
                  audio6.loop = false;
                  audio6.play();
                }}
              />
            </ul>
          </div>
          <div className="list8">
            <ul>
              <li><button className='button-87' onClick={PostData}><b>Submit</b></button></li>
              <li><button className='button-87'><b>Cancel</b></button></li>
            </ul>
          </div>
        </section>


      </div>
    </div>
  )
}
