import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { Context } from './../context/Context';
import loading from '../assets/loading.gif';

const Home = () => {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async() => {
            setLoading(true);
          const res = await axios.get("https://glacial-everglades-76553.herokuapp.com/api/posts"+search);
        //   console.log(res);
          setPosts(res.data);
          setLoading(false);
        }
        fetchPosts();
    },[search]);
    if(loading)
    {
        return <div className='flex justify-center items-center max-h-screen'><img src={loading} alt="" /></div>
    }
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