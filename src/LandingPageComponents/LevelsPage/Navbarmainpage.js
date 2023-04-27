import React from 'react'
import userlogo from '../images/Navbar images/userlogo.png'
import coins from '../images/Navbar images/coins.png'
import rupee from '../images/Navbar images/rupee.png'
import '../Styles/Navbarmainpage1.scss'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Navbarmainpage(props) {
    const [user, setUser] = useState({})
    const date = new Date();
    let phone = props.phone;
    const userData = async (e) => {
        //e.preventDefault();
        // const { phone:phone} = user;
        console.log("user");
        console.log(phone)
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
            accountNumber : data.data.accountNumber,
            email: data.data.email,
            phone: data.data.phone,
            city : data.data.city,
            state : data.data.state,
            dob : data.data.dob,
            points : data.data.points,
            money : data.data.money,
  
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
    <div id="navbar-levels">
    <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">IB Learning</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="mx-auto">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Points Earned :
                                        <img src={coins} className="coins" alt="coin" /> 50pts </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Current Balance : <img src={rupee} className="rupee" alt="rupee" />10000 /-</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav1-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Welcome,Ram</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="middle">
                        <ul className="navbar-nav mb-2 mb-lg-0 ">
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"> User Menu <img src={userlogo} className="User-logo" alt="logo" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                    <li><a className="dropdown-item" href="/">Scoreboard</a></li>
                                    {/* <li><a className="dropdown-item" href="/">Language</a></li> */}
                                    <li><a href="/Levelspage" className="dropdown-item" >Levels Page</a></li>

                                    <li><a className="dropdown-item" href="/">Log out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
    </>
  )
}
