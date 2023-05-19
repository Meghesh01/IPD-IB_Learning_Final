import React from 'react'
import Level from './Level';
import Navbarmainpage from './Navbarmainpage';

// import Navbarmainpage from '../LevelsPage/Navbarmainpage';

export default function Mainpage(props) {
    return (
        <>
           <div id="levels-mainpage">
           <Navbarmainpage phone = {props.phone} />
            <div className="container">
                <Level phone = {props.phone} password = {props.password} beneficiaryaccountnumber = {props.beneficiaryaccountnumber} branch = {props.branch}/>
            </div>
            </div>
        </>
    )
}
