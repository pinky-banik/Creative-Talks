import React from 'react';
import Post from './Post';


const Posts = ({posts}) => {
    return (
        <div className='flex justify-center w-full px-auto my-5'>
            <div className='flex flex-wrap gap-5 justify-center'>
            {
                posts.map(post=>
                <Post key={post._id} post={post}/>)
            }
        </div>
        </div>
    );
};

export default Posts;