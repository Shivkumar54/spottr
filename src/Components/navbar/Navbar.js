import React from 'react'
import "./navbar.css"

import Logo from "../../Images/logooo.png"

const Navbar = () => {
  return (
    <div className="nav ">
      <div className="nav-img ">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="nav-text">
        <a href='#'> <i class="fa fa-user-circle" aria-hidden="true"></i> Login</a>
      </div>
    </div>
  )
}

export default Navbar