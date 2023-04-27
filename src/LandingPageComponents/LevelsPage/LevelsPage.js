import React from 'react'
import './mainpageNewCss.scss'
import Mainpage from './Mainpage'
import {  useLocation } from 'react-router-dom';

export default function LevelsPage() {
  const location = useLocation();
  let phone = location.state.phone;
  return (
    <>
       <div id="mainpageNewCss">
       <Mainpage phone = {phone}/>   
        </div>   
    </>
  )
}
