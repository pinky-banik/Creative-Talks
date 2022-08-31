import React, { useContext } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';
import { Context } from './../context/Context';
import {axios} from 'axios';


const Login = () => {
    const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
    return (
        <div style={{backgroundImage: `url(${bg})`,}}  className='h-screen flex  flex-col justify-center items-center bg-opacity-60 bg-cover bg-center bg-blend-multiply'>
            <span className='text-4xl my-5 '>Login</span>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <label >Username</label>
                <input 
                 className='p-1 focus:outline-none'
                  type="text"
                   placeholder='Enter your username....' 
                   ref={userRef}/>
                <label >Password</label>
                <input 
                className='p-1 focus:outline-none'
                 type="password"
                  placeholder='Enter your Password....'
                  ref={passwordRef} />
                <button className='bg-red-300 p-1    rounded-lg disabled:btn-disabled'disabled={isFetching} type="submit">Login</button>
            </form>
            <Link to ="/register"><button className='absolute   top-[70px] right-[20px] bg-teal-800 p-2 px-3 rounded-lg text-teal-100 cursor-pointer' >Register</button></Link>
        </div>
    );
};

export default Login;