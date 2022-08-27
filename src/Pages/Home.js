import React from 'react';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import Sidebar from '../Components/Sidebar';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className='flex '>
                <Posts/>
                <Sidebar/>
            </div>
        </div>
    );
};

export default Home;