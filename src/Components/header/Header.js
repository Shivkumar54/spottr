import React from 'react'
import "./header.css"
import HeaderImg from "../../Images/Header Image.png"

const Header = () => {
  return (
    <div className='header '>
          <div className="header-image">
        <img src={HeaderImg} alt="Header Image" />
      </div>
      <div className='header-text'>
        <h1>Rent PG near your College</h1>
        <p>Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. </p>
        <button className='default-btn'> Get Started </button>
      </div>
  
    </div>
  )
  
}
export default Header