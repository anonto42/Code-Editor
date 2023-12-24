import React from 'react'
import NaveBer from '../Components/NaveBer/NaveBer';
import './Css/home.css'
import HTML from './../Components/HTML/HTML';
import Css from './../Components/Css/Css';
import JavaScript from './../Components/JavaScript/JavaScript';

const Home = () => {
  return (
    <div className='home'>
        <NaveBer/>
      <div className="innerPart">
        <div className="hs">
          <HTML/>
          <Css/>
        </div>
        <JavaScript/>
      </div>
    </div>
  )
}

export default Home