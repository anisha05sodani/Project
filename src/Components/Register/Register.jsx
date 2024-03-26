import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <h2 className="account-head">Create an account</h2>
            <form>
                <div className="input">
                    <input type="text" placeholder='Name' />
                </div>

                <div className="input">
                    <input type="email" placeholder='Your email' />
                </div>

                <div className="input">
                    <input type="password" placeholder='Password' />
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                    <label className="form-check-label" for="form2Example3g">
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                </div>

                <button >Register</button>

                <p >Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

            </form>

        </div >
    )
}

export default Register
