import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa"

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Your email' required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required></input>
                    <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label>
                    <a href='#' >Forgot password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className='Login-button'>
                    <div className="btn">
                        <button>
                            Login with google
                        </button>
                    </div>
                    <div className="btn">
                        <button >
                            Login with gmail
                        </button>
                    </div>
                </div>
                <div className='register-link'>
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
