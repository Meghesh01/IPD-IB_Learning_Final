import React from 'react'
import userlogo from '../images/userlogo.png'
import coins from '../images/coins.png'
import rupee from '../images/rupee.png'
import './Navbarmainpage1.scss'

import { Link } from 'react-router-dom';

export default function Navbarmainpage(props) {
  return (
    <>
   <div id="navbar-mainpage">
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
                                        <img src={coins} className="coins" alt="coin" /> 500pts </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Current Balance : <img src={rupee} className="rupee" alt="rupee" /> 20,000 /-</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav1-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Welcome, {props.name}</a>
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
                                    <li><Link to="/Scoreboard" className="dropdown-item" >Scoreboard</Link></li>
                                    {/* <li><a className="dropdown-item" href="/">Language</a></li> */}
                                    <li><Link to="/LevelsPage" className="dropdown-item" >Levels Page</Link></li>

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
