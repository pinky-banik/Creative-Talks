import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Context } from '../context/Context';
import Sidebar from './Sidebar';

const Settings = () => {
    const{user,dispatch} = useContext(Context);
    const[file,setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const publicFolder = "http://localhost:4000/images/";

    const handleSubmit =async(e) =>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser ={
            userId :user?._id,
            username,email,password
        }
        if(file){
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePic = filename;
            try{
                const res = await axios.post ("http://localhost:4000/api/upload",data);
                setSuccess(true);
                dispatch({type:"UPDATE_SUCCESS",payload :res.data})
            }catch(err){
                dispatch({type : "UPDATE_FAILURE"})
            }
        }
        try{
          await  axios.post ("http://localhost:4000/api/users" + user._id,updatedUser);

        }catch(err)
        {

        }
    }
    return (
        <div className='flex '>
            <div className='w-full mx-auto p-5'>
                <div className='lg:w-4/5 mx-auto  flex justify-between mb-5'>
                    <span className='text-2xl text-red-400 font-bold'>Update Your Account</span>
                    <span className='text-red-600'>Delete Account</span>
                </div>
                <form  className='lg:w-4/5 mx-auto flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className='flex items-center my-2'>
                    <img className='w-16 h-16 rounded-lg object-cover object-center ' src={(file? URL.createObjectURL(file) : publicFolder+ user?.profilePic )|| "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"} alt="" />
                    <label htmlFor="fileInput">
                        <FaRegUserCircle className='mx-3 cursor-pointer text-green-500 text-3xl bg-red-100 p-1 rounded-full'/>
                    </label>
                    <input
                     className='hidden' 
                     type="file"  
                     id='fileInput' 
                     onChange={e=>setFile(e.target.files[0])}
                     />
                    </div>
                    <label>Username</label>
                    <input 
                    className='my-3 border-b-2 py-2 focus:outline-none'  type="text"
                     placeholder={user?.username} 
                     onChange={e=>setUsername(e.target.value)}
                     />
                    <label>Email</label>
                    <input 
                    className='my-3 border-b-2 py-2 focus:outline-none' type="email"
                     placeholder={user?.username} 
                     onChange={e=>setEmail(e.target.value)} />
                    <label>Password</label>
                    <input 
                    className='my-3 border-b-2 py-2 focus:outline-none' type="password" 
                    placeholder='*****' 
                    onChange={e=>setPassword(e.target.value)}/>
                    <button className='px-5 w-fit mx-auto text-white py-2 rounded-xl bg-green-900 focus:outline-none' type='submit'>Submit</button>
                    {success && <span className='text-green-500 text-center'>Profile has been updated.....</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};

export default Settings;