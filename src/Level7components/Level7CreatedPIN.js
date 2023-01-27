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

export default function Level7CreatedPIN() {
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
            <div class="alert alert-general">
            <i class="fas fa-info" style={{ paddingRight: 10 }}></i>  New ATM Pin number has been updated succesfully. In case of PIN generated of new ATM Card, Kindly perform your first transaction at any Banks's ATM  
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
