import React from 'react'
import '../Styles/Buttons1.css'
import '../Styles/Buttons2.css'
import { Link } from 'react-router-dom';


export default function Level() {
  return (
    <>

      <div className="container">
        <h1 className='levelselection'>LEVEL SELECTION</h1>
        <div className=' row'>
          <div className="col">
            <Link to="/Level1">
              <button class="button-29" role="button">1</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/Level2">
              <button class="button-29" role="button">2</button>
            </Link>

          </div>
          <div className="col">
            <button class="button-29" role="button">3</button>
          </div>
          <div className="col">
            <button class="button-29" role="button">4</button>
          </div>
          <div className='col'>
            <button class="button-82" role="button">Test</button>
          </div>
        </div>
        <div className='row'>
          <div className="col">
            <button class="button-29" role="button">5</button>
          </div>
          <div className="col">
            <Link to="/Level6">
              <button class="button-29" role="button">6</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/Level7">
              <button class="button-29" role="button">7</button>
            </Link>
          </div>
          <div className="col">
          <Link to="/Level8">
              <button class="button-29" role="button">8</button>
            </Link>
          </div>
          <div className='col'>
            <button class="button-82" role="button">Test</button>
          </div>
        </div>
        <div className=' row'>
          <div className="col">
            <Link to="/Level9">
              <button class="button-29" role="button">9</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/Level10">
              <button class="button-29" role="button">10</button>
            </Link>
          </div>
          <div className="col">
            <button class="button-29" role="button">11</button>
          </div>
          <div className="col">
            <button class="button-29" role="button">12</button>
          </div>
          <div className='col'>
            <button class="button-82" role="button">Test</button>
          </div>
        </div>
      </div>
    </>
  )
}
