import React from 'react'
import { NavLink } from 'react-router-dom'

import "./navbar.css"

import Logo from "../../Images/logooo.png"

const Navbar = () => {
  return (
    <div className="nav ">
      <div className="nav-img ">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="nav-text">
        <NavLink  to="/Login"> <i class="fa fa-user-circle" aria-hidden="true"></i> Login</NavLink>
      </div>
    </div>
  )
}

export default Navbar