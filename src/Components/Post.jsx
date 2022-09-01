import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import none from '../assets/none.jpg' ;

const Post = ({post}) => {
    // const publicFolder = "https://glacial-everglades-76553.herokuapp.com/images/";
    const {title,createdAt,desc,photo,catagories,_id}= post;
    return (
        <div className='w-80 bg-gray-50 p-3  mb-5'>
            {
                photo ? (
                    <img className='w-full h-56 object-cover rounded-md ' src={photo} alt="" />
                ):
                <img className='w-full h-56 object-cover rounded-md ' src={none} alt="" />
            }
            <div className='flex flex-col justify-center items-center '>
                <div className=' text-[#be9656] flex gap-2 mt-3 cursor-pointer' style={{fontFamily : 'Varela Round'}} >
                    {
                        catagories?.map((c,index)=>
                            <span key={index}>{c}</span>)
                    }
                </div>
                <Link to={`/post/${_id}`}><span className='text-2xl mt-2 font-bold cursor-pointer hover:text-blue-800' style={{fontFamily : 'Josefin Sans'}}>{title.length>20?( title.slice(0,20)+"..."):title}</span></Link>
                
                <hr />
                <span className="italic text-[#999] my-2" style={{fontFamily : 'Lora'}} >{new Date(createdAt).toDateString()}</span>
            </div>
            <p style={{fontFamily : 'Varela Round'}} className='text-[#444] overflow-hidden text-ellipsis postdesc text-md'>
                {desc}
            </p>
        </div>
    );
};

export default Post;