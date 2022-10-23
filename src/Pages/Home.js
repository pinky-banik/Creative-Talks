import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { Context } from './../context/Context';
import loadinggif from '../assets/loading-load.gif';

const Home = () => {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const {search} = useLocation();

    // useEffect(()=>{
    //     const fetchPosts = async() => {
    //         // setLoading(true);
    //       const res = await axios.get("https://glacial-everglades-76553.herokuapp.com/api/posts"+search);
    //     //   console.log(res);
    //       setPosts(res.data);
    //       setLoading(false);
    //     }
    //     fetchPosts();
    // },[search]);

    
    useEffect(()=>{
        fetch("https://glacial-everglades-76553.herokuapp.com/api/posts"+search)
        .then(res=> res.json())
        .then(data=>{
            setPosts(data);
            setLoading(false);
        })

    },[search]);


    if(loading)
    {
        return <div className='flex justify-center items-center h-screen'><img src={loadinggif} alt="" /></div>
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