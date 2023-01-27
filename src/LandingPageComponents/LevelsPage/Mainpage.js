import React from 'react'
import '../Styles/Mainpage1.scss';
import Navbarmainpage from './Navbarmainpage';

import Level from './Level';

export default function Mainpage() {
    return (
        <>
           <div id="levels-mainpage">
           <Navbarmainpage />
            <div className="container">
                <Level />
            </div>
           </div>
        </>
    )
}
