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
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Level7() {
   const location = useLocation();
  let phone = location.state.phone;
  let password = location.state.password;
  console.log(password);
  const navigate = useNavigate();
  const navigateLevel7EnterOTP = () => {
   navigate('/Level7EnterOTP',{state: {phone:phone,password:password}});
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
      <div className="d-flex flex-column px-4 pb-4" style={{color: 'rgb(50, 110, 153)'}}>
                  <span>Please choose your option to validate</span>           
        </div>
      <ul className="nav nav-tabs mb-3 px-md-4 px-2">
         <li className="nav-item"> <a className="nav-link px-2 active" aria-current="page" href="#">Select the Mode</a> </li>
         {/* <li className="nav-item"> <a className="nav-link px-2" href="#">Mobile Payment</a> </li>
         <li className="nav-item ms-auto"> <a className="nav-link px-2" href="#">+ More</a> </li> */}
      </ul>
     
      <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
         {/* <div className="btn btn-success me-4"><span className="fas fa-plus"></span></div>
         <div className="btn-group" role="group" aria-label="Basic radio toggle button group"> <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/> <label className="btn btn-outline-primary" for="btnradio1"><span className="pe-1">+</span>5949</label> <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/> <label className="btn btn-outline-primary" for="btnradio2"><span className="lpe-1">+</span>3894</label> </div> */}
      </div>
      <form action="">
         <div className="row">
            <div className="col-12">
               <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span> <a onClick={navigateLevel7EnterOTP}><input id='radio' type="radio" class="option-input radio" name="example" /></a>  Using Profile password</span> 
               </div>
            </div>
            
            {/* <div className="col-12">
               <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span><input id='radio-1' type="radio" class="option-input radio" name="example" />  Using Profile Password</span> 
               </div>
            </div> */}
            
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
