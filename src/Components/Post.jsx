import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const publicFolder = "http://localhost:4000/images/";
    const {title,createdAt,desc,photo,catagories,_id}= post;
    return (
        <div className='w-80   mb-5'>
            {
                photo && (
                    <img className='w-full h-56 object-cover rounded-md ' src={publicFolder + photo} alt="" />
                )
            }
            <div className='flex flex-col justify-center items-center '>
                <div className=' text-[#be9656] flex gap-2 mt-3 cursor-pointer' style={{fontFamily : 'Varela Round'}} >
                    {
                        catagories.map(c=>
                            <span key={c.name}>{c.name}</span>)
                    }
                </div>
                <Link to={`/post/:${_id}`}><span className='text-2xl mt-2 font-bold cursor-pointer' style={{fontFamily : 'Josefin Sans'}}>{title}</span></Link>
                
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