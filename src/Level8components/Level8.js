import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import './Level8.scss';
import '../Level6components/Level6.scss'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Level8() {
   const navigate = useNavigate();


  const [level8, setLevel8] = useState({
    // accountnumber: "",
    namedebit: "",
    amount: "599",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLevel8({ ...level8, [name]: value });
  };
  const location = useLocation();
  let phone = location.state.phone;

   const handleAddEntry = async (e) => {
      const {  namedebit, amount } =
      level8;
      
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
    <>
    <div id='level-6'>
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
            <li><b>Payment Through Debit Card</b></li>
            </ul>
    </section>
    </div>
        <div id='level-8'>
        <div className="container bg-light d-md-flex align-items-center">
   {/* <div className="card box1 shadow-sm p-md-5 p-md-5 p-4">
   <div id='showing-debit-card'>
        <div className='min-h-screen flex justify-center items-center bg-blue-500'>
            <div className="card rounded-lg h-auto w-3/4 bg-white">
                <div className="flex h-full w-full">
                <div className="left_side truncate relative rounded-l-lg h-auto w-full truncate"> 
                        
                        <div className="h-48 w-72 opacity-70 rounded-lg absolute top-28 left-8 " style={{backgroundColor: "#84a3fa",}}>
                            <div className="p-2 mt-3 text-black font-semibold">
                                <p >Card Number</p>
                                <p className="border text-black shown_number">0000 0000 0000 0000</p>
                            </div>
                            <div className="flex  row gap-3 mt-3" style={{paddingLeft :" 10px"}}>
                                <div className="p-2 mt-2 text-black font-semibold col">
                                    <p >Expiry Date</p>
                                    <p className="border-b-2 text-black shown_expiry">mm/yyyy</p>
                                </div>
                                <div className="p-2 mt-2 text-black font-semibold col">
                                    <p >CVV</p>
                                    <p className="border-b-2 text-black shown_cvv">000</p>
                                </div>
                            </div>
                        </div>
            </div>
                </div>
            </div>
        </div>
   </div>
      <div className="fw-bolder mb-4"><span className="fas fa-dollar-sign"></span><span className="ps-1">599,00</span></div>
      <div className="d-flex flex-column">
         <div className="d-flex align-items-center justify-content-between text"> <span className="">Commission</span> <span className="fas fa-dollar-sign"><span className="ps-1">1.99</span></span> </div>
         <div className="d-flex align-items-center justify-content-between text mb-4"> <span>Total</span> <span className="fas fa-dollar-sign"><span className="ps-1">600.99</span></span> </div>
         <div className="border-bottom mb-4"></div>
         <div className="d-flex flex-column mb-4"> <span className="far fa-file-alt text"><span className="ps-2">Invoice ID:</span></span> <span className="ps-3">SN8478042099</span> </div>
         <div className="d-flex flex-column mb-5"> <span className="far fa-calendar-alt text"><span className="ps-2">Next payment:</span></span> <span className="ps-3">22 july,2018</span> </div>
         <div className="d-flex align-items-center justify-content-between text mt-5">
            <div className="d-flex flex-column text"> <span>Customer Support:</span> <span>online chat 24/7</span> </div>
            <div className="btn btn-primary rounded-circle"><span className="fas fa-comment-alt"></span></div>
         </div>
      </div>
   </div> */}
   <div className="card box2 shadow-sm">
      <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
         <span className="h5 fw-bold m-0">Payment methods</span> 
         <div className="btn btn-primary bar"><span className="fas fa-bars"></span></div>
      </div>
      <ul className="nav nav-tabs mb-3 px-md-4 px-2">
         <li className="nav-item"> <a className="nav-link px-2 active" aria-current="page" href="#">Debit Card</a> </li>
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
                  <span>Debit Card Number</span> 
                  <div className="inputWithIcon"> <input className="form-control" type="text" placeholder="5136 1845 5468 3894"/> <span className=""> <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt=""/></span> </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                  <span>Expiration<span className="ps-1">Date</span></span> 
                  <div className="inputWithIcon"> <input type="text" className="form-control" placeholder="11/02"/> <span className="fas fa-calendar-alt"></span> </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                  <span>Code CVV</span> 
                  <div className="inputWithIcon"> <input type="password" className="form-control" placeholder="***"/> <span className="fas fa-lock"></span> </div>
               </div>
            </div>
            <div className="col-12">
               <div className="d-flex flex-column px-md-5 px-4 mb-4">
                  <span>Name</span> 
                  <div className="inputWithIcon"> <input name="namedebit"
                value={level8.namedebit}
                onChange={handleInputs} className="form-control text-uppercase" type="text" placeholder="rahul kalathia"/> <span className="far fa-user"></span> </div>
               </div>
            </div>
            <div className="col-12 px-md-5 px-4 mt-3">
               <div onClick={handleAddEntry} className="btn btn-primary w-100">Pay ₹599.00</div>
            </div>
         </div>
      </form>
   </div>
</div>
        </div>
    </>
  )
}
