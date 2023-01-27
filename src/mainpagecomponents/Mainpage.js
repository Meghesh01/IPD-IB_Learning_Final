import React, { useEffect, useState } from 'react'
import './Mainpage1.scss';
import Navbarmainpage from './Navbarmainpage';
import { Link, useLocation } from 'react-router-dom';

export default function Mainpage() {
    const [user, setUser] = useState({})
    const date = new Date();
    // let phone = 9867075589;
    const location = useLocation();
    let phone = location.state.phone;
    const userData = async (e) => {
        //e.preventDefault();
        // const { phone:phone} = user;
        console.log("user");
        console.log(location.state)
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
            name : data.data.name,
            email: data.data.email,
            phone: data.data.phone,
            city : data.data.city,
            state : data.data.state,
            dob : data.data.dob,

        });
        // console.log("Hello");
        // console.log(user);
        // console.log(data.data);
        // console.log(data.data.name);
        
      };
      
        
      useEffect(() => {
        userData();
        
      }, [])
     
      
    return (
        <>
   
           <div id="main-page">
           <Navbarmainpage name = {user.name} />
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                                            width="150" />
                                        <div className="mt-3">
                                            <h4>{user.name}</h4>
                                            <p className="text-secondary mb-1">Student at IB Learning</p>
                                            <p className="text-muted font-size-sm">{user.city},{user.state}</p>
                                            <Link to="/LevelsPage">
                                            <button type="button" class="btn btn-success mx-2">Start</button>
                                            </Link>
                                            <Link to="/">
                                            <button type="button" class="btn btn-danger mx-2">Logout</button>
                                            </Link>
                                            <button type="button" class="btn btn-primary mx-2">Upload Photo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h3 className="mb-0"><b>Account Details</b></h3>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Account Number:</h6>
                                        <span className="text-secondary">60003200024</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">CIF Number:</h6>
                                        <span className="text-secondary">SBINI004</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Your Bank: </h6>
                                        <span className="text-secondary">State Bank of India</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <div class="d-grid gap-2 col-10 mx-auto">
                                            <Link to="/Viewpassbook">
                                                <button class="button-39">View Passbook</button>
                                            </Link>
                                            <Link to="/Viewdebitcard">
                                                <button class="button-40">View Virtual Debit Card</button>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-center">
                                            <h3 className="mb-0"><b>PROFILE DETAILS</b></h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            {user.name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            {user.phone}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                           {user.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-center">
                                            <h3 className="mb-0"><b>ADDITIONAL DETAILS</b></h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Date of Birth</h6>
                                        </div>
                                        <div className="col-sm-9 ">

                                            {
                                            new Date(user.dob).toDateString()}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Age</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            {date.getFullYear()-new Date(user.dob).getFullYear()}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">City / Village / Town</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            {user.city}
                                        </div>
                                    </div>
                                    {/* <hr /> */}
                                    {/* <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">District</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            Thane
                                        </div>
                                    </div> */}
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">State</h6>
                                        </div>
                                        <div className="col-sm-9">
                                         {user.state}
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
