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
import { useLocation } from "react-router-dom";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Level7EnterOTP() {
   const location = useLocation();
  let password = location.state.password;
  console.log(password);
  const [level7, setLevel7] = useState({
   password: "",
 });
 let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLevel7({ ...level7, [name]: value });
  };
  const navigate = useNavigate()
  function comparePassword() {

   if (password === level7.password) {
      navigate('/Level7SelectCard');
   } else {
     alert("Incorrect Password");
   }
 }
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
      <div className="d-flex flex-column px-4 pb-4" style={{color: 'rgb(244, 166, 63)'}}>
                  <span><i>Mandatory fields are marked in asterisk(*)</i></span>           
        </div>
      <div className="d-flex flex-column px-4 pb-4" style={{color: 'rgb(50, 110, 153)'}}>
                  <span>Enter the profile password</span>           
        </div>
      
     
      <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
         {/* <div className="btn btn-success me-4"><span className="fas fa-plus"></span></div>
         <div className="btn-group" role="group" aria-label="Basic radio toggle button group"> <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/> <label className="btn btn-outline-primary" for="btnradio1"><span className="pe-1">+</span>5949</label> <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/> <label className="btn btn-outline-primary" for="btnradio2"><span className="lpe-1">+</span>3894</label> </div> */}
      </div>
      <form action="">
         <div className="row">
            <div className="col">
               <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span>Profile Password<span style={{color: 'rgb(244, 166, 63)'}}>*</span></span> 
                  
               </div>
            </div>
            <div className="col">
               <div id='nostyle'>
               <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span><input name="password"
                  value={level7.password}
                  onChange={handleInputs} type="password" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/></span>  
               </div>
               </div>
            </div> 
            <div className="col"></div> 
            
            
         </div>
         <div id="list8">
            <ul>
            <li><button onClick={comparePassword} className='button-87'><b>Submit</b></button></li>
            </ul>
        </div>
         
      </form>
      <div id="alert-1">
      <div className="row" style={{ paddingTop: 0 }}>
         <div className="row col container" style={{ paddingTop: 0 }}>
            <div className="col row container" style={{ paddingTop: 0 }}>
            <div className="col container" style={{ marginTop: 0 }}>
            <div class="alert alert-general">
            <i class="fas fa-info" style={{ paddingRight: 10 }}></i>  Mobile number is mandatory if you wish to change ATM Pin manually
            </div>
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
