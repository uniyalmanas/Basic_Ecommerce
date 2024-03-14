import React from 'react'
import '../Pages/Css/loginsignup.css'
const LoginSignup = () => {
  return (
<>
<div className="loginsignup">
  <div className="loginsignup-cointainer">
    <h1>Sign Up</h1>
    <div className="loginsignup-fields">
      <input type="text" placeholder='Your name'/>
      <input type="email" placeholder='Email Address'/>
      <input type="password" placeholder='Password'/>
    </div>
    <button className='btn'> Continue</button>
    <p className="loginsignup-login">
      Already have a account ? <span> login here</span>
    </p>
    <div className="loginsignup-agree">
      <input type="checkbox" name='' id='' />
      <p> By continuing , i agree to the terms of use & privacy policy</p>
    </div>
  </div>
</div>

</>  )
}

export default LoginSignup