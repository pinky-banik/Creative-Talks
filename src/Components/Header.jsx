import React from 'react';
import cover from '../assets/cover.avif' ;

const Header = () => {
    
    return (
        <div className='header text-[#444] ' style={{fontFamily: 'Lora',}}>
            <div className="headerTitles flex flex-col items-center">
                <span className='text-2xl absolute top-24'>React & Node</span>
                <span className='text-8xl absolute top-32'>Blog</span>
            </div>
            <img className='w-full h-[32rem] object-cover object-center mt-28' src={cover} alt="" />
        </div>
    );
};

export default Header;