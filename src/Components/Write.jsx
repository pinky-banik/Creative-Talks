import React from 'react';
import  {BsPlusCircle} from 'react-icons/bs' ;

const Write = () => {
    return (
        <div className='p-5 lg:w-4/5 mx-auto sm:w-11/12'>
            <img className='lg:h-[36rem] w-full object-cover object-center' src="https://i.ytimg.com/vi/JPT3bFIwJYA/maxresdefault.jpg" alt="" />
            <form action="">
                <div className='flex justify-between py-5 items-start gap-3 '>
                <div className='w-full '>
                <div className='flex gap-3 items-center text-4xl'  >
                    <label htmlFor='fileInput'><BsPlusCircle/></label>
                    <input className='hidden w-full' type="file" id='fileInput' />
                    <input className=' rounded p-2 w-full ' type="text" id='fileInput' placeholder='Title' autoFocus={true}/>
                </div>
                
                </div>
                
                <button className='bg-green-800 px-3 rounded py-1 text-white'> Publish</button>
                </div>
                <div>
                    <textarea className='w-full h-56 focus:outline-dotted focus:outline-gray-300  rounded p-3' type="text" placeholder='Tell your story...' autoFocus={true}></textarea>
                </div>
            </form>
        </div>
    );
};

export default Write;