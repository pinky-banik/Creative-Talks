import React from 'react';
import Sidebar from './Sidebar';
import SinglePost from './SinglePost';

const Single = () => {
    return (
        <div className='flex'>
            <SinglePost/>
            <Sidebar/>
        </div>
    );
};

export default Single;