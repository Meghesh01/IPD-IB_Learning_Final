import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Level3.scss';
import { Link} from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png'
import { useNavigate } from "react-router-dom";
export default function Level3() {

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
    const { name,accountnumber, beneficiaryaccountnumber, branch } =
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
        <img src={sbilogo} className="sbi-logo" alt="sbi" style={{height : 48 , marginRight: 7}}/>
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
          <li><b> Name </b>:<input type="text" className='inp1'  name="name"
                value={level3.name}
                onChange={handleInputs}/></li>
          <li><b>Account Number</b> :<input type="text" className='inp2' name="accountnumber"
                value={level3.accountnumber}
                onChange={handleInputs}/></li>
          <li><b>Beneficiary Account Number</b> :<input type="text" className='inp3'name="beneficiaryaccountnumber"
                value={level3.beneficiaryaccountnumber}
                onChange={handleInputs}/> </li>
          <li><b>Adress1</b> :<input type="text" className='inp4'/> </li>
          <li><b>Adress2</b> :<input type="text" className='inp5'/> </li>
          <li><b>Branch</b> :<input type="text" className='inp6' name="branch"
                value={level3.branch}
                onChange={handleInputs}
                /></li>
          <li><b>Transfer Limit</b> :<input type="text" className='inp7'/> </li>
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
          <li><button className='button-87' onClick = {PostData}><b>Submit</b></button></li>
          <li><button className='button-87'><b>Cancel</b></button></li>
        </ul>
      </div>
</section>


    </div>
    </div>
  )
}
