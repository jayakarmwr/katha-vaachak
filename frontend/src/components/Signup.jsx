import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import image from '../assets/images/image.jpg';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/en/signup", {
        username,
        email
      });
      const data=response.data.msg;
      if(data=="User created successfully. Check your email to confirm")
      {
        alert("Signup successful: " + response.data.msg);

      }
      else
      {
        alert("Signup failed: " + response.data.msg);
      }
      
    } catch (error) {
      console.error("There was an error signing up:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className='container-1'>
      <div className='Signup-Block'>
        <form onSubmit={handleSubmit} className='form'>
          <h1 className='Signup'>Signup</h1>
          <div className='input-box-1'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='input-box-1'>
            <input
              type='email'
              placeholder='Email-id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='button'>Signup</button>
          <div className="login">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;