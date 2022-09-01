import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Context } from '../context/Context';
import Sidebar from './Sidebar';
import pic from '../assets/pic.png';
import { toast } from 'react-toastify';
const Settings = () => {
    const{user,dispatch} = useContext(Context);
    // console.log(user || "no user");
    const[file,setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const imgStorageKey ='e45298c57c6b915f179ec8d9543b8284';

    // const publicFolder = "https://glacial-everglades-76553.herokuapp.com/images/";

    const handleSubmit =async(e) =>{
        e.preventDefault();
        
        dispatch({type:"UPDATE_START"})
        const image= file;
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        let img;
        const formData = new  FormData(); //this thing is coming from uploading a file.. mozila cdn docs
        formData.append('image',image);
        await fetch(url,{
            method:'POST',
            body: formData,
        })
        .then(res=>res.json())
        .then(result=>{
             if(result.success){
               img= result.data.url;
            }
            console.log(result);
        });

        const updatedUser ={
            userId :user._id,
            username: username? username : user.username ,
            email: email? email : user.email ,
            password : password? password : user.password,
            profilePic : img,
        };
        try{
          {const res = await  axios.put("https://glacial-everglades-76553.herokuapp.com/api/users/" + user._id,updatedUser);
          setSuccess(true);
          dispatch({type:"UPDATE_SUCCESS",payload :res.data});
          toast.success("Successfully updated user!");}
        }catch(err)
        {
            {dispatch({type : "UPDATE_FAILURE"});
            toast.error("updating user unsuccessfull");}
        }
    }

    let userpic;
    if(user.profilePic)
    {
         userpic = user.profilePic;
    }else{
         userpic =  pic;
    }
    return (
        <div className='flex '>
            <div className='w-full mx-auto p-5'>
                <div className='lg:w-4/5 mx-auto  flex justify-between mb-5'>
                    <span className='text-2xl text-red-400 font-bold'>Update Your Account</span>
                    {/* <span className='text-red-600 cursor-pointer'onClick={handleDelete}>Delete Account</span> */}
                </div>
                <form  className='lg:w-4/5 mx-auto flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className='flex items-center my-2'>
                    <img className='w-16 h-16 rounded-lg object-cover object-center ' src={(file? URL.createObjectURL(file) : userpic )} alt="" />
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
                     placeholder={user.username} 
                     onChange={e=>setUsername(e.target.value)}
                     />
                    <label>Email</label>
                    <input 
                    className='my-3 border-b-2 py-2 focus:outline-none' type="email"
                     placeholder={user.email} 
                     onChange={e=>setEmail(e.target.value)} />
                    <label>Password</label>
                    <input 
                    className='my-3 border-b-2 py-2 focus:outline-none' type="password" 
                    placeholder='Please input old password or new password to update anything' 
                    onChange={e=>setPassword(e.target.value)} required/>
                    <button className='px-5 w-fit mx-auto text-white py-2 rounded-xl bg-green-900 focus:outline-none' type='submit'>Submit</button>
                    {success && <span className='text-green-500 text-center'>Profile has been updated.....</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};

export default Settings;