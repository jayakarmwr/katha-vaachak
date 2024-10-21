import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className='container'>
        <div className='imageBlock'>
            
        </div>
        <div className='Signup-Block'>
            <form action=''>
                <h1 className='Signup'>Signup</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Email-id' required/>
                </div>
                <button type='submit'>Signup</button>
                <div className="login">
                    <p>Already have an account? Login</p>
                </div>
            </form>
        </div>
    </div>
    
  )
}
export default Signup;
