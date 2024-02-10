import React from 'react';
import './css/loginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email id' />
          <input type="password" placeholder='Password'/>
        </div>
        <button><span>Continue</span></button>
        <p className='loginSignup-login'>Already Registered ? <span>Login Here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use and privacy policies</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup