import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { Context } from './../context/Context';

const Home = () => {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();
    const {user} = useContext(Context);
    // console.log(user || "no user");
    useEffect(()=>{
        const fetchPosts = async() => {
          const res = await axios.get("https://glacial-everglades-76553.herokuapp.com/api/posts"+search);
        //   console.log(res);
          setPosts(res.data);
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