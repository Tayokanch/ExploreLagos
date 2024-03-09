import React from 'react'
import  './Log.css'
function Log() {
  return (
    <form className='form'>
        <p className='heading'>Welcome to Explore Lagos</p>
        <h3>Login with</h3>
        <div>
            <label>Email</label>
            <input type="email" name="email" id="" required/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password"  required/>
        </div>
        <div>
            <p className='forget_password'>Forget Password?</p>
        </div>
        <div>
            <button>Login</button>
        </div>
     
    </form>
  )
}

export default Log
