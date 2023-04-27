import React from 'react'
import Level from './Level';
import Navbarmainpage from './Navbarmainpage';

// import Navbarmainpage from '../LevelsPage/Navbarmainpage';

export default function Mainpage(props) {
    return (
        <>
           <div id="levels-mainpage">
           <Navbarmainpage />
            <div className="container">
                <Level phone = {props.phone} />
            </div>
            </div>
        </>
    )
}
