import React from 'react';
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import pic from '../assets/pic.png';

const Topbar = () => {
    return (
        <div style={{fontFamily: 'Josefin Sans',}} className='top sticky top-0 py-3 flex justify-around items-center bg-white z-10'>
           <div className="topLeft flex gap-2 text-lg">
            <FaFacebookSquare/>
            <FaTwitterSquare/>
            <FaInstagramSquare/>
           </div>
           <div className="topCenter ">
            <ul className="topList flex gap-5">
            <li className="topList">Home</li>
            <li className="topList">About</li>
            <li className="topList">Contact</li>
            <li className="topList">Write</li>
            <li className="topList">Logout</li>
            </ul>
            
           </div>
           <div className="topRight flex justify-center items-center">
            <img className='w-10 h-10 rounded-full object-cover object-center' src={pic} alt="" />
            <BiSearch className='text-2xl mx-2'/>
           </div>
        </div>
    );
};

export default Topbar;