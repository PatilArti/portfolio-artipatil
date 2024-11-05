import React from 'react'
import './Navbar.css';
import patillogo from '../../assets/patillogo.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={patillogo} alt="logo"/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar