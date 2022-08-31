import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
        const res = await axios.get("http://localhost:4000/api/categories");
        setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className='sm:block hidden w-1/4 m-5 pb-5 bg-[#fdfbfb] rounded-md  flex-col items-center h-fit'>
            <div className="sidebarItem flex flex-col items-center">
                <span style={{fontFamily: 'Varela Round'}} className='sidebarTitle uppercase m-5 p-1 w-4/5 text-lg text-[#222] border-y font-bold leading-5 text-center border-y-[#a7a4a4]'>About Me</span>
                <img className='mt-3' src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" alt="" />
                <p className='p-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi amet illum, reiciendis itaque maiores cumque.</p>
            </div>     
            <div className="sidebarItem flex flex-col items-center w-full">
                <span style={{fontFamily: 'Varela Round'}} className='sidebarTitle uppercase m-5 p-1 w-4/5 text-lg text-[#222] border-y font-bold leading-5 text-center border-y-[#a7a4a4]'>Catagories</span>
                <ul className='grid grid-cols-2 items-center justify-between '>
                {cats?.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
                </ul>
            </div>     
            <div className="sidebarItem flex flex-col items-center w-full">
                <span style={{fontFamily: 'Varela Round'}} className='sidebarTitle uppercase m-5 p-1 w-4/5 text-lg text-[#222] border-y font-bold leading-5 text-center border-y-[#a7a4a4]'>Follow Us</span>
                <div className='flex gap-5'>
                <FaFacebookSquare/>
                <FaTwitterSquare/>
                <FaInstagramSquare/>
                </div>
            </div>     
        </div>
    );
};

export default Sidebar;