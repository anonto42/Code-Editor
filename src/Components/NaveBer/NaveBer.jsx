import React from 'react'
import './navstyle.css'
import { Link } from 'react-router-dom'

const NaveBer = () => {
  return (
    <div className='NaveBer'>
      <div className="logo"><img src="#" alt="*" /></div>
      <div className='btn'><Link to='/output' target='blank'><i class="fa-solid fa-code"></i></Link></div>
    </div>
  )
}

export default NaveBer