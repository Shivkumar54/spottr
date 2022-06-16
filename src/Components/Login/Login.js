import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../Images/logooo.png"
import "./login.css"
import LoginImage from "../..//Images/loogin.png"

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


            <div className='loginRoot '>
            <div className='imageLogin'>
              <img src={LoginImage} />
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
                                <a href=''><i class="fa-brands fa-google"></i></a>
                                <a href=''><i class="fa-brands fa-google"></i></a>
                                <a href=''><i class="fa-brands fa-google"></i></a>
                            </div>
                        </div>
              </div>
                </div>

            </div>

         
    </div>
  )
}

export default Login