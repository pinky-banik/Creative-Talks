import React, { useState } from 'react';
import  {BsPlusCircle} from 'react-icons/bs' ;
import  axios from "axios";
import { useContext } from 'react';
import { Context } from './../context/Context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Write = () => {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    const[file,setFile] = useState(null);
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const imgStorageKey ='e45298c57c6b915f179ec8d9543b8284';
    

    
    const handleSubmit =async(e) =>{
        e.preventDefault();
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
            //    toast.success("image uploaded succesfully");ca
            }
            console.log(result);
        });

        const newPost ={
            username :user.username,
            title,
            desc,
            photo:img,
        }
        // console.log(newPost);
        // if(file){
        //     const data =new FormData();
        //     const filename = Date.now() + file.name;
        //     data.append("name",filename);
        //     data.append("file",file);
        //     newPost.photo = filename;
        //     try{
        //         await axios.post("https://glacial-everglades-76553.herokuapp.com/api/upload",data);
        //     }catch(err){
                
        //     }
        // }
        try{
          const res =await  axios.post("https://glacial-everglades-76553.herokuapp.com/api/posts",newPost);
          window.location.replace("/post/"+res.data._id);
          toast.error("Posting Blog unsuccessful");
        }catch(err)
        {
            toast.error("Posting Blog unsuccessful");
        }
    }
    return (
        <div className='p-5 lg:w-4/5 mx-auto sm:w-11/12'>
            {
                file && 
                <img className='lg:h-[36rem] w-full object-cover object-center' src={URL.createObjectURL(file)} alt="" />
            }
            <form onSubmit={handleSubmit}>
                <div className='flex justify-between py-5 items-start gap-3 '>
                <div className='w-full '>
                <div className='flex gap-3 items-center text-4xl'  >
                    <label htmlFor='fileInput'><BsPlusCircle className='text-gray-400'/></label>
                    <input className='hidden w-full' type="file" id='fileInput' onChange={e=>setFile(e.target.files[0])}/>

                    <input 
                    className=' 
                    rounded p-2 w-full '
                    type="text" id='fileInput'
                    placeholder='Title'
                    autoFocus={true}
                    onChange={e=>setTitle(e.target.value)}
                    />
                </div>
                
                </div>
                
                <button className='bg-green-800 px-3 rounded py-1 text-white' type='submit'> Publish</button>
                </div>
                <div>
                    <textarea className='w-full h-56 focus:outline-dotted focus:outline-gray-300  rounded p-3' type="text" placeholder='Tell your story...' autoFocus={true} onChange={e=>setDesc(e.target.value)}></textarea>
                </div>
            </form>
        </div>
    );
};

export default Write;