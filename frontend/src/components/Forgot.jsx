import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Forgot.css'; // Change to use Forgot.css
import image from '../assets/images/image.jpg';

const Forgot = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }
        
        try {
            const response = await axios.post("http://localhost:3000/en/change-password", { email, password, confirm });
            const data = response.data.msg; 
            if (data === 'ok') {
                alert("Password updated successfully");
                navigate("/login");
            } else {
                alert("Failed to update password: " + data);
            }
        } catch (error) {
            console.error("There was an error updating the password", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className='container'>
            <div className='LoginBlock'>
                <form onSubmit={handleSubmit}>
                    <h1 className='Login'>Enter New Password</h1>
                    <div className='input-box'>
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='New Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' className='button'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default Forgot;