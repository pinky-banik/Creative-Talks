import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

const Register = () => {
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("http://localhost:4000/api/auth/register", {
            username,
            email,
            password,
          });
          res.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
      };
    return (
        <div style={{backgroundImage: `url(${bg})`,}}  className='h-screen flex  flex-col justify-center items-center bg-opacity-60 bg-cover bg-center bg-blend-multiply'>
            <span className='text-4xl my-5 '>Register</span>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3' >
                <label >Username</label>
                <input 
                className='p-1 focus:outline-none'
                 type="text" 
                 placeholder='Enter your username....'
                 onChange={(e) => setUsername(e.target.value)}
                 />
                <label >Email</label>
                <input 
                className='p-1
                 focus:outline-none'
                 type="email" 
                 placeholder='Enter your email....' 
                 onChange={(e) => setEmail(e.target.value)}/>
                <label >Password</label>
                <input 
                className='p-1 focus:outline-none' 
                type="password" 
                placeholder='Enter your Password....' 
                onChange={(e) => setPassword(e.target.value)}/>
                <button className='bg-teal-800 p-1    text-teal-100 rounded-lg ' type='submit'>Register</button>
            </form>
            <button className='absolute   top-[70px] right-[20px] bg-red-400 p-2 px-3 rounded-lg  cursor-pointer'><Link to="/login">Login</Link></button>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    );
};

export default Register;