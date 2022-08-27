import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import {BiEdit} from 'react-icons/bi';

const SinglePost = () => {
    return (
        <div className='w-full p-5'>
            <div>
            <img className='w-full  object-cover rounded-md ' src="https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png" alt="" />
            <div className='flex flex-col justify-center items-center '>
                <div className=' text-[#be9656] flex gap-2 mt-3 cursor-pointer' style={{fontFamily : 'Varela Round'}} >
                    <span>React</span>
                    <span>Node</span>
                </div>
                
                <div className='flex w-full '> 
                <span className='text-2xl flex justify-center items-center mt-2 font-bold w-full text-center cursor-pointer' style={{fontFamily : 'Lora'}}>Lorem ipsum dolor sit amet.</span>
                <div className=' flex justify-end items-center w-fit gap-2 float-right'>
                    <BiEdit className=' text-green-500 text-2xl'/>
                    <AiOutlineDelete className=' text-red-500 text-2xl'/>

                </div>
                </div>
                <hr />
                <div className='flex justify-between w-full'>
                <span className="italic text-xl text-[#999] my-2"  >Author : Pinky Banik</span>
                <span className="italic text-[#999] my-2"  >1 hour ago</span>
                </div>
            </div>
            <p style={{fontFamily : 'Lora'}} className='text-[#444] overflow-hidden first-letter:text-4xl text-md first-letter:ml-5 '>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis reiciendis magnam eveniet neque libero accusantium quidem impedit earum architecto quo voluptates dolore exercitationem accusamus cum, animi similique doloribus asperiores, recusandae a obcaecati ipsum illum ea consequuntur eos. Magni totam porro voluptatem, adipisci consequatur maiores suscipit dicta dolores! Tenetur, iure veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quia velit suscipit nisi distinctio voluptas nam hic aliquam itaque? Porro nesciunt, ea earum consectetur facere, exercitationem molestiae nobis hic quos quia quidem doloremque iusto fugit magnam voluptatum, sequi aperiam. Tempora dolor expedita necessitatibus totam, asperiores voluptates et. Blanditiis at vel laudantium dicta deserunt quae, labore facilis! Dolores inventore harum mollitia qui ad dolor possimus ex reprehenderit libero ea voluptatem nobis aliquam, iure dicta porro, maiores atque! Quis quibusdam laudantium quae dicta, provident placeat deleniti, perspiciatis autem rem error recusandae voluptate. Odit provident quis sit quisquam blanditiis? Numquam, cupiditate? Repellat ducimus, dolore, neque, commodi est repellendus at nihil vel explicabo non voluptatem sit molestias quaerat magni doloremque praesentium nobis maiores debitis corporis. Modi natus sit autem cumque eum esse voluptate. Blanditiis harum fugiat hic ex, magni vel possimus quas quisquam laudantium sit, quidem nisi, tempora saepe mollitia ipsam debitis. Esse.
            </p>
            </div>
        </div>
    );
};

export default SinglePost;