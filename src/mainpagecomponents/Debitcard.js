import React from 'react'
import Navbarmainpage from './Navbarmainpage'

import map from '../images/map.png'
import chip from '../images/chip.png'
import visa from '../images/visa.png'
import pattern from '../images/pattern.png'
import './Debitcard1.scss'

export default function debitcard() {
  return (
  <>
   <div id="debit-card">
     <Navbarmainpage/>
    <div className="container1">
    <div className="card1">
        <div className="card1-inner">
            <div className="front">
                {/* <img src="images/map.png" className="map-img"/> */}
                <img src={map} className="map-img" alt="map" />
                <div className="row">
                    {/* <img src="images/chip.png" width="60px"/> */}
                    <img src={chip} className="chip-img" alt="chip" />
                    {/* <img src="images/visa.png" width="80px"/> */}
                    <img src={visa} className="visa-img" alt="visa" />
                </div>
                <div className="row card1-no g-0">
                    {/* <p>5244</p>
                    <p>2150</p>
                    <p>8252</p>
                    <p>6420</p> */}
                    <div className="col">5244</div>
                    <div className="col">2150</div>
                    <div className="col">8252</div>
                    <div className="col">6420</div>
                </div>
                <div className="row card1-holder">
                    {/* <p>CARD HOLDER</p>
                    <p>VALID TILL</p> */}
                    <div className="col-9">CARD HOLDER</div>
                    <div className="col">VALID TILL</div>
                </div>
                <div className="row name">
                    {/* <p>MEGHESH N. NAGPURE</p>
                    <p>10 / 27</p> */}
                    <div className="col-9">MEGHESH N. NAGPURE</div>
                    <div className="col">10 / 27</div>
                </div>
            </div>
            <div className="back">
                {/* <img src="images/map.png" className="map-img"/> */}
                <img src={map} className="map-img" alt="map" />
                <div className="bar"></div>
                <div className="row card1-cvv">
                    <div>
                         {/* <img src="images/pattern.png"/> */}
                         <img src={pattern} id="pat" alt="pattern" />
                    </div>
                    <div><p>824</p></div>
                </div>
                <div className="row card1-text">
                    <p>Not valid for payments in Foreign Exchange in India, Nepal and Bhutan.This debit card is governed by Bank's debit card terms and conditions.</p>
                </div>
                <div className="row signature">
                    <div className="col-9"><p>CUSTOMER SIGNATURE</p></div>
                    {/* <img src="images/visa.png" width="80px"/> */}
                    <div className="col"><img src={visa} className="visa-img" id="vb-img" alt="visa" /></div>
                </div>
            </div>
        </div>
    </div>
 </div>
   </div>
</>
  )
}
