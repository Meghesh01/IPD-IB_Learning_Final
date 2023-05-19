import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Levelmainpage4.scss';
import { Link } from 'react-router-dom';

import bankimg1 from './bankimg1.jpg';
import bankimg2 from './bankimg2.jpg';
import bankimg3 from './bankimg3.jpg';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';

import bounceArrow from './bounce_arrow.png';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Levelmainpage4() {
  const location = useLocation();
  let phone = location.state.phone;
  console.log(phone);
  let beneficiaryaccountnumber = location.state.beneficiaryaccountnumber;
  let branch = location.state.branch;
  const navigate = useNavigate()
  const navigateLevel4 = () => {
    navigate('/Level4',{state: {phone:phone,beneficiaryaccountnumber:beneficiaryaccountnumber,branch:branch}});
  }
  return (
    <>
      <div id="level-2">
        <div>
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
                    {/* <Link to="/Levelspage">
            
              <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
               <b>Logout</b>
            
            </Link> */}

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </section>

          <section style={{ marginTop: 60 }} >
            <ul className='nav-2'>
              <li><a className="active" href="/">MY PROFILE</a></li>
              <li><a href="#">ADD BENEFICIARY</a></li>
              <li class="nav-item dropdown"><a class="nav-link  dropdown-toggle" href="/" data-bs-toggle="dropdown">  PAYMENTS/TRANSFER  </a>
              <img
                      src={bounceArrow}
                      className="arrow"
                      alt="arrow"
                      style={{
                        position:'absolute',
                        width: '70px',
                        height: '70px',
                        backgroundSize: 'contain',
                        animation: 'bounce 2s infinite',
                        rotate:'90deg',
                        marginLeft:'-2rem'
                      }}
              />
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item2" href="#"> Quick Transfer</a></li>
                  <li><a onClick={navigateLevel4} class="dropdown-item2" href="/level4" style={{backgroundColor:'red',border:'2px solid black',animation: 'bounce 2s infinite',cursor:'pointer'}}> Transfer to added Beneficiary</a></li>
                  {/* <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li> */}
                </ul>
              </li>
              <li><a href="/">CARDS</a></li>
              <li class="nav-item dropdown"><a class="nav-link  dropdown-toggle" href="/" data-bs-toggle="dropdown"> BILL PAYMENTS </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item2" href="#">TopUp Recharge</a></li>
                  <li><a class="dropdown-item2" href="#">Electricity Bill</a></li>
                  {/* <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li> */}
                </ul>
              </li>
              <li><a href="/">BE SAFE</a></li>
              <li><a href="/">PERSONAL LOAN</a></li>
            </ul>

            <p style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}><b>WELCOME ! MEGHESH NANDKUMAR NAGPURE</b></p>
          </section>
          <section>
            <p style={{ textAlign: 'center', fontSize: 17 }}><b>TRANSACTION ACCOUNT : </b></p>
            <table>
              <tr>
                <th>Account no.</th>
                <th>Branch</th>
                <th>Available Balance</th>
                <th>Account Statement</th>
              </tr>
              <tr>
                <td>60003200024</td>
                <td>Kalyan</td>
                <td>Rs. 20,000 /-</td>
                <td><a href="#">Click here</a></td>
              </tr>
            </table>
          </section>
          <section style={{ marginTop: 120 }}>
            <div class="row" style={{ alignContent: 'center' }}>
              <div class="column">
                <img src={bankimg1} className="bank-img1" alt="img1" style={{ width: '100%' }} />
              </div>
              <div class="column">
                <img src={bankimg2} className="bank-img2" alt="img2" style={{ width: '100%' }} />
              </div>
              <div class="column">
                <img src={bankimg3} className="bank-img2" alt="img2" style={{ width: '100%' }} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>

  )
}


