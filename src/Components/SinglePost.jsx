import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import {BiEdit} from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../context/Context';
import none from '../assets/none.jpg' ;

const SinglePost = () => {
    const {postId} = useParams();
    // console.log(postId);
    const[post,setPost] = useState({});
    const {createdAt,photo,catagories,_id,username}= post;
    // const publicFolder = "https://glacial-everglades-76553.herokuapp.com/images/";
    const {user} = useContext(Context);
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [updateMode,setUpdateMode] = useState(false);

    useEffect(()=>{ 
        const getPost = async()=>{
            const res =await axios.get(`https://glacial-everglades-76553.herokuapp.com/api/posts/${postId}`);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    },[postId]);

    const handleDelete =async() =>{
        try{
        await axios.delete(`https://glacial-everglades-76553.herokuapp.com/api/posts/${post._id}` ,{data:{username:user.username}});
        window.location.replace("/");
        }catch(err){}
    }
    const handleUpdate =async() =>{
        try{
        await axios.put(`https://glacial-everglades-76553.herokuapp.com/api/posts/${post._id}` ,
        {username:user.username,
            title,
            desc
        });
        window.location.reload();
        setUpdateMode(false);
        }catch(err){}
    }
    return (
        <div className='w-full p-5'>
            <div>
            {
                photo ?
                (<img className='w-full  object-cover rounded-md lg:max-h-[30rem]' src={photo} alt="" />):
                (<img className='w-full  object-cover rounded-md lg:max-h-[30rem]' src={none} alt="" />)
            }
            
            <div className='flex flex-col justify-center items-center '>
                <div className=' text-[#be9656] flex gap-2 mt-3 cursor-pointer' style={{fontFamily : 'Varela Round'}} >
                    {
                        catagories?.map(c=>
                            <span key={c?.name}>{c.name}</span>)
                    }
                </div>
                {
                updateMode ?  
                <input type="text" value={title} className='text-2xl flex justify-center items-center mt-2 font-bold w-full text-center cursor-pointer focus:outline-none border-b-2  py-2' autoFocus onChange={(e)=>setTitle(e.target.value)}/>
                :(
                    <div className='flex w-full '> 
                <span className='text-2xl flex justify-center items-center mt-2 font-bold w-full text-center cursor-pointer' style={{fontFamily : 'Lora'}}>{title}</span>
                {/* {username === user?.username &&  */}
                {username === user?.username && 
                (<div className=' flex justify-end items-center w-fit gap-2 float-right'>
                <BiEdit className=' text-green-500 cursor-pointer text-2xl' onClick={()=>setUpdateMode(true)}/>
                <AiOutlineDelete className=' text-red-500 text-2xl cursor-pointer'onClick={handleDelete}/>

               </div>)}
                </div>
                )}
                
                <hr />
                <div className='flex justify-between w-full'>
                <span className="italic text-xl text-[#999] my-2"  >Author : <Link to={`/?user=${username}`}><b>{username}</b></Link></span>
                <span className="italic text-[#999] my-2"  >{new Date(post.createdAt).toDateString()}</span>
                </div>
            </div>
            {
                updateMode ? <textarea  style={{fontFamily : 'Lora'}} className='text-[#444] overflow-hidden first-letter:text-4xl text-md first-letter:ml-5 ' value={desc} onChange={(e)=>setDesc(e.target.value)}/> :
                <p style={{fontFamily : 'Lora'}} className='text-[#444] overflow-hidden first-letter:text-4xl text-md first-letter:ml-5 '>
                {desc}
                </p>
            }
            {
                updateMode && 
                <button className='bg-teal-600 p-2 rounded w-20 text-white cursor-pointer self-end' onClick={handleUpdate}>Update</button>
            }
            
            </div>
        </div>
    );
};

export default SinglePost;