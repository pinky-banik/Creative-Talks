import React, { useContext } from 'react';
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import pic from '../assets/pic.png';
import {Link}  from 'react-router-dom';
import { Context } from '../context/Context';

const Topbar = () => {
    const {user,dispatch} = useContext(Context);
    const publicFolder = "http://localhost:4000/images/";
    const handleLogout=()=>{
        dispatch({type : "LOGOUT"});
    }
    return (
        <div style={{fontFamily: 'Josefin Sans',}} className='top sticky top-0 py-3 flex justify-around items-center bg-white z-10'>
           <div className="topLeft flex gap-2 text-lg">
            <FaFacebookSquare/>
            <FaTwitterSquare/>
            <FaInstagramSquare/>
           </div>
           <div className="topCenter ">
            <ul className="topList flex gap-5">
            <Link to="/"><li className="topList">Home</li></Link>
            <Link to="/about"><li className="topList">About</li></Link>
            <Link to="/contact"><li className="topList">Contact</li></Link>
            <Link to="/write"><li className="topList">Write</li></Link>
            <Link to="/"><li className="topList" onClick={handleLogout}>{user && "LOGOUT"}</li></Link>
            </ul>
            
           </div>
           <div className="topRight flex justify-center items-center">
            {
                user ?
                <Link className='focus:outline-none' to="/settings"><img className='w-10 h-10 rounded-full object-cover object-center cursor-pointer focus:outline-none' src={publicFolder + user?.propfilePic || pic} alt="" /></Link> :
                (
                    <>
                    <ul className='flex gap-5'>
                    <Link to="/login"><li className="topList">Login</li></Link>
                    <Link to="/register"><li className="topList">Register</li></Link>
                    </ul>
                    </>
                )
            }
            <BiSearch className='text-2xl mx-2'/>
           </div>
        </div>
    );
};

export default Topbar;