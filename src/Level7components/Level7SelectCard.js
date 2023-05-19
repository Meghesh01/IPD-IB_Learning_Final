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
import './list123.scss';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Level7SelectDebitAccount() {
  const location = useLocation();
  let phone = location.state.phone;
  
  const navigate = useNavigate();
  const navigateLevel7Enter4DigitPin = () => {
   navigate('/Level7Enter4DigitPin',{state: {phone:phone}});
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
                  <span>Select the Card that you wish to change the PIN number</span>           
      </div>
      <div id="list123">
      <div className='list1'>
        <ul className='row'>
          <div className='col-3'><li><b>Card Number</b></li></div>
          <div className='col-3'><li><b>Card Holder Name</b></li></div>
          <div className='col-3'><li><b>Card Status</b></li></div>
          <div className='col-3'><li><b>Expiry Date</b></li></div>
        </ul>
        <hr className='hr'></hr>
      </div>
      <div className='list2'>
        <ul className='row'>
          <div className='col-3'><li ><input type="radio" id="html" name="fav_language" value="HTML"/> 2036155608</li></div>
          <div className='col-3'><li>RAHULKALATHIA</li></div>
          <div className='col-3'><li>ACTIVE</li></div>
          <div className='col-3'><li>12-12-2012</li></div>
        </ul>
      </div>
      <div className="d-flex flex-column px-4 pb-4" style={{color: 'rgb(50, 110, 153)'}}>
                  <span>Already Blocked/Inactive ATM card numeber(s)</span>           
      </div>
      <div className='list3'>
        <ul>
          <li><b>Selected Card number :</b></li>
          <li>2036155608</li>
        </ul>
      </div>
      </div>
      
     
      
      <form action="">
         <div id="list8">
            <ul style={{paddingLeft : 0}}>
            <li><a onClick={navigateLevel7Enter4DigitPin}><button className='button-87'><b>Submit</b></button></a></li>
            <li><button className='button-87'><b>Cancel</b></button></li>
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
