import React from 'react'
import Logo from "../../Images/logooo.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className="container foooter ">
      <div className="logo d-flex align-item-center justify-content-center">
        <img src={Logo} />
      </div> <hr />
      <div className='foter-text'>
      <div className='fotr' >
        <h3>Quick Links</h3>
        <ul>
          <li><a href="">Home</a> </li>
          <li><a href="">About</a> </li>
          <li><a href="">Contact</a> </li>
          <li><a href="">Feedback</a> </li>
          <li><a href="">Login / Sign up</a> </li>
        </ul>
      </div> <hr />
      <div className='fotr'>
        <h3>About</h3>
        <ul>
          <li><a href="">Client</a> </li>
          <li><a href="">Team</a> </li>
          <li><a href="">Carrer</a> </li>
          <li><a href="">Testimonial</a> </li>
          <li><a href="">Journel</a> </li>
        </ul>
      </div><hr />
      <div className='fotr'>
        <h3 >Help</h3>
        <ul>
          <li><a href="">Privacy Policy</a> </li>
          <li><a href="">Terms & Condtition </a> </li>
          <li><a href="">Patners</a> </li>
          <li><a href="">FAQ</a> </li>
        </ul>
      </div> <hr />
      <div className='fotr'>
          <h3>Follow us</h3>
          <ul>
          <li><a href="" className='icons'><i class="fa-brands fa-facebook"></i> spottr.facebook.com </a> </li>
          <li><a href="" className='icons'><i class="fa-brands fa-instagram"></i> spottr.instagram.com </a> </li>
          <li><a href="" className='icons'><i class="fa-brands fa-twitter"></i> spottr.twitter.com </a> </li>
          <li><a href="" className='icons'><i class="fa-brands fa-linkedin"></i> spottr.linkedin.com </a> </li>
          <li><a href="" className='icons'><i class="fa-brands fa-github"></i> spottr.github.com </a> </li>
          <li><a href="" className='icons'><i class="fa-brands fa-discord"></i> spottr.discord.com </a> </li>
          </ul>
          
      </div> <hr />
      </div>
    </div>
    </div>
  )
}

export default Footer