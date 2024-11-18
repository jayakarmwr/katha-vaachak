import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import image from '../assets/images/image.jpg';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/en/getdata", { email, password });
            const data = response.data.msg; 
            if (data === 'ok') {
                alert("Successfully logged in");
            }
        } catch (error) {
            console.error("There was an error logging in", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className='container'>
            <div className='LoginBlock'>
                <form onSubmit={handleSubmit}>
                    <h1 className='Login'>Login</h1>
                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="forgot">
                        <a href="/change-password">Forgot Password?</a>
                    </div>
                    <button type='submit' className='button'>Login</button>
                    <div className="register">
                        <p>Don't have an account? <a href='/signup' className='a1'>Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;