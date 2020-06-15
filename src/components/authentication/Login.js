import React from 'react'
// import avatar from 'components/assets/avatar.svg'
import signInBg from 'components/assets/signInBg.svg'
import 'components/authentication/login.css'

const Login = () => {
  return (
    <>
      <img className='login--image' src={signInBg} alt='signInBg' />
      <div className='login--form'>
        <h2>Login</h2>
        {/* <img className='form__avatar' src={avatar} alt='avatar' /> */}
        <div className='input'>
          <div className='form__input'>
            <label>Username</label>
            <input type='email' name='username' placeholder='your email' />
          </div>
          <div className='form__input'>
            <label>Password</label>
            <input type='password' name='password' placeholder='......' />
          </div>
          <div className='form__input'>
            <input type='submit' name='signIn' value='Sign In' />
          </div>
          <p className='form__forgot-password'> Forgot Password</p>
        </div>
      </div>
    </>
  )
}

export default Login
