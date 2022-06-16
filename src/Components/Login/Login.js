import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../Images/logooo.png"
import "./login.css"
import LoginImage from "../..//Images/fixx-removebg.png"

const Login = () => {
    return (
      

        <div>
            


            {/* // Login Duplicate  */}
        <div className="nav navform">
                <div className="nav-img ">
                <NavLink  to="/"><img src={Logo} alt="Logo"/> </NavLink>
   
      </div>
    </div>
        {/* // Login Duplicate  */}


            <div className='root'>
            <div className='loginRoot container '>
            <div className='imageLogin'>
                    <div className='imageflexer'>
                        <h2>Spottr </h2>
                        <img src={LoginImage} />
              </div>
                    <h3>Welcome you back </h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua.</p>
                    
          </div>

                <div className='formRoot'>
                <div className='logForm'>
                    <div className='logImg d-flex justify-content-center'>
                    <img src={Logo} className="formLogo" />

                    </div>
                    <form>
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="Phone number" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="COllege name" />
                        <input type="date" placeholder="DOB" />
                        <input type="password" placeholder="password" />
                        <button className='default-btn bttn' type='submit'>Login</button>
                        </form>
                        <a className='forgot' href='#'>Forgot Password</a>
                        <hr className='hori' />
                        <div className='social'>
                            <h5> or Sign up with</h5>
                            <div className='socIcons'>
                                <a href=''><i class="fa-brands fa-google"></i></a>
                                <a href=''><i class="fa-solid fa-envelope"></i></a>
                                <a href=''><i class="fa-brands fa-facebook"></i></a>
                                <a href=''><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
              </div>
                </div>

            </div>
            </div>

         
    </div>
  )
}

export default Login