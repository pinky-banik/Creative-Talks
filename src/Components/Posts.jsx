import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <div className='flex justify-center w-full px-auto my-5'>
            <div className='flex flex-wrap gap-5 justify-center'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
        </div>
    );
};

export default Posts;