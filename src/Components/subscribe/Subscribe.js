import React from 'react'
import Immage from "../../Images/subscribe.png"
import "./subscribe.css"

const Subscribe = () => {
  return (
    <div className="container sub">
      <div className='subimg'>
        <img src={Immage} alt="Image" />
      </div>
      <div className='subText'>
        <h1>To get notified <br/> fastr before anyone</h1>
        <h4>Subscribe to newsletter</h4>
        <input type="email" placeholder="Eg - john123@gmail.com" />
        <button className='default-btn'>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe