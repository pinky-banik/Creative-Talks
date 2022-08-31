import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

const Home = () => {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();
    useEffect(()=>{
        const fetchPosts = async() => {
          const res = await axios.get("http://localhost:4000/api/posts"+search);
          console.log(res);
        }
        fetchPosts();
    },[search])
    return (
        <div>
            <Header/>
            <div className='flex '>
                <Posts posts ={posts}/>
                <Sidebar/>
            </div>
        </div>
    );
};

export default Home;