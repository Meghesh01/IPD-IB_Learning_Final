import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Level6.scss';
import { Link} from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Level6() {
  const location = useLocation();
  let phone = location.state.phone;
  console.log(phone);
  
  const [user, setUser] = useState({accountNumber: ""});
  const userData = async (e) => {
    //e.preventDefault();
    // const { phone:phone} = user;
    console.log("user");
    console.log(location.state);
    const res = await fetch("/get-mainpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
      }),
    });
    var data = await res.json();

    // console.log(data);
    setUser({
      accountNumber: data.data.accountNumber,
    });
    // console.log("Hello");
    // console.log(user);
    // console.log(data.data);
    // console.log(data.data.name);
  };
  console.log(user.accountNumber);
  const [level6, setLevel6] = useState({
    debitname: "",
    phone : phone,
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLevel6({ ...level6, [name]: value });
  };
  const navigate = useNavigate();
  const postData = async (e) => {
    //e.preventDefault();
    const { debitname,phone } = level6;
    const res = await fetch("/setdebitname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        debitname,
        phone,
      }),
    });
    const data = await res.json();
    
    if (data.error) {
      // e.preventDefault();
    alert("Invalid  credentials");
    
  }
    else {

      alert("Registration successful");
      navigate('/LevelsPage',{state: {phone:phone}});
    }
  };

  useEffect(() => {
    userData();
  }, []);
  return (
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
            <li><b>Request ATM Card</b></li>
            </ul>
    </section>
    <section className='max-width'>
    <div className="container pri-account">
                <p style={{ textAlign: "left", fontSize: 20, marginTop: 10 }}>
                    <b className='pri'>Select Primary Account</b>
                </p> 
    </div>
      <div className='list1'>
        <ul className='row'>
          <div className='col-4'><li><b>Account Number/Nickname</b></li></div>
          <div className='col-4'><li><b>Account type</b></li></div>
          <div className='col-4'><li><b>Branch</b></li></div>
        </ul>
        <hr className='hr'></hr>
      </div>
      <div className='list2'>
        <ul className='row'>
          <div className='col-4'><li ><input type="radio" id="html" name="fav_language" value="HTML"/> {user.accountNumber}</li></div>
          <div className='col-4'><li>Savings</li></div>
          <div className='col-4'><li>Vile parle</li></div>
        </ul>
      </div>
      <div className='list3'>
        <ul>
          <li><b>Selected account number :</b></li>
          <li>{user.accountNumber}</li>
        </ul>
      </div>

      <div className="container pri-account">
                <p style={{ textAlign: "left", fontSize: 20, marginTop: 10 }}>
                    <b>Select Secondary Account</b>
                </p> 
    </div>
    <div className='list1'>
        <ul className='row'>
          <div className='col-4'><li><b>Account Number/Nickname</b></li></div>
          <div className='col-4'><li><b>Account type</b></li></div>
          <div className='col-4'><li><b>Branch</b></li></div>
        </ul>
        <hr className='hr'></hr>
      </div>
      <div className='list2'>
        <ul className='row'>
          <div className='col-4'><li ><input type="checkbox"/> {user.accountNumber}</li></div>
          <div className='col-4'><li>Savings</li></div>
          <div className='col-4'><li>Vile parle</li></div>
        </ul>
      </div>
      <div className='list4'>
        <ul>
          <div className='row'>
            <div className='col-3'><li><b>Card Category </b>:</li></div>
            <div className='col-8 row'>
              <div className='col-4'><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/> Debit Card</div> 
              <div className='col-4'><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2"/> My Card</div>
            </div>
          </div>
          <li><b>Name on the Card</b> :<input name="debitname"
                  value={level6.debitname}
                  onChange={handleInputs} style={{width:'250px'}} type="text" className='inp2'/></li>
          <div className='row'>
            <div style={{width:'230px'}} className='col-md-3'><li><b>Select Type of Card</b> :</li></div>
            <div style={{width:'275px'}} className='col-4'>
            <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
            <option selected>--Select--</option>
            <option value="1">International Debit Card(Visa)</option>
            <option value="2">Global NCMC Card(RuPay)</option>
            <option value="3">IOCL Global Contactless Card(Visa)</option>
            <option value="4">IOCL Global Contactless Card(Rupay)</option>
            </select>
            </div>
          </div>
        </ul>
      </div>
      <div className='list7'>
        <ul>
          <li><input type="checkbox"/></li>
          <li>I accept the terms and conditions</li>
        </ul>
      </div>
      <div className="list8">
        <ul>
          <li><button className='button-87' onClick={postData}><b>Submit</b></button></li>
          <li><button className='button-87'><b>Cancel</b></button></li>
        </ul>
      </div>
</section>
   </div>
  
  )
}
