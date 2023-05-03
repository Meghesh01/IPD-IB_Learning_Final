import React from 'react'
import './mainpageNewCss.scss'
import Mainpage from './Mainpage'
import { useLocation } from "react-router-dom";

export default function LevelsPage() {
  const location = useLocation();
  let phone = location.state.phone;
  let password = location.state.password;
  console.log(password);
  return (
    <>
       <div id="mainpageNewCss">
       <Mainpage phone = {phone} password = {password}/>   
        </div>   
    </>
  )
}