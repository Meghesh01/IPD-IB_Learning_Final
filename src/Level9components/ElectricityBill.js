import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './ElectricityBill.scss';
import { Link } from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function TopupRecharge() {
  const navigate = useNavigate();


  const [level91, setLevel91] = useState({
    // accountnumber: "",
    namedebit: "Electricity Bill",
    amount: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLevel91({ ...level91, [name]: value });
  };
  const location = useLocation();
  let phone = location.state.phone;

   const handleAddEntry = async (e) => {
      const {  namedebit, amount } =
      level91;
      
      const response = await fetch("/passbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  name: namedebit, debitMoney: amount  }),
      });
      const data = await response.json();
      if (data.status === 422 || !data) {
        window.alert("Invalid registration");
        console.log("Invalid registration");
      } else {
        window.alert("Successful Paid");
        console.log("Successful registration");
  
        navigate('/LevelsPage',{state: {phone:phone}});
      }
  
      //const data = await response.json();
      // onAddEntry(data);
      // setName('');
      // setDebitMoney('');
    };
  return (
    <div id="QuickTransfer">
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

      <section className='nav-2' style={{ marginTop: 60 }} >
        <ul >
          <li><b>ELECTRICITY BILL PAYMENT</b></li>
        </ul>
      </section>
      <section className='max-width'>
        <div style={{color:'blue', fontWeight:'bold', textAlign:'center', paddingTop:'10px'}}>
          Select the debit Account Number: 
        </div>
        <div className='list1'>
          <ul>
            <li><b>Account Number</b></li>
            <li><b>Account type</b></li>
            <li><b>Branch</b></li>
            <li><b>Balance</b></li>
          </ul>
          <hr className='hr'></hr>
        </div>
        <div className='list2'>
          <ul>
            <li ><input type="radio" id="html" name="fav_language" value="HTML" /> 2036155608</li>
            <li>Savings</li>
            <li>Vile parle</li>
            <li><img className="rupeeblack" src={rupeeblack} />54000</li>
          </ul>
        </div>
        <div className='list3'>
          <ul>
            <li><b>Selected account number :</b></li>
            <li>2036155608</li>
          </ul>
        </div>
        <div className='list4'>
          <ul>
            <li><b>Enter the Service provider *</b>:<input type="text" className='inp1' /></li>
            <li><b>Enter State *</b> :<input type="text" className='inp2' /></li>
            <li><b>Enter Biling Unit (BU) *</b> :<input type="text" className='inp3' /> </li>
            <li><b>Enter amount to be paid *</b> : <input name="amount"
                value={level91.amount}
                onChange={handleInputs} type="text" className='inp4' /></li>
          </ul>
        </div>
        <div className='list7'>
          <ul>
            <li><input type="checkbox" /></li>
            <li>I accept the terms and conditions</li>
          </ul>
        </div>
        <div className="list8">
          <ul>
            <li><button onClick={handleAddEntry} className='button-87' style={{marginLeft:'85px'}}><b>Submit</b></button></li>
            <li><button className='button-87'><b>Cancel</b></button></li>
          </ul>
        </div>
      </section>
    </div>

  )
}
