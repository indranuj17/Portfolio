import React from 'react'
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {
 
    const[Nav, setNav]=useState(false);

    // const links=[   // array
    // {  id:1,
    //    link:'Home',
    // },

    // {
    //     id:2,
    //     link:'About',
    // },
    // {
    //     id:3,
    //     link:'Experience',
    // },
    // {
    //     id:4,
    //     link:'Projects',
    // },
    // {
    //     id:5,
    //     link:'Contact',
    // },

    // ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed shadow-lg shadow-slate-800 bg-opacity-50 backdrop-blur-sm'>
        <div className='font-signature ml-2 text-4xl '>Indranuj Dev</div>
        <ul className= 'hidden md:flex'>
            {/* {links.map(({id,link}) => {
                <li  key={id} 
                className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover: scale-105 duration-200 '>{link}</li>
                
            })}; */}

            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-gray-500 scale-105 duration-200 '><Link to="Home" spy={true} smooth={true}offset={50}duration={500}>Home</Link></li>
            <li  className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-gray-500 scale-105 duration-200 '><Link to="About" spy={true} smooth={true}offset={50}duration={500}>About</Link></li>
            <li  className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-gray-500 scale-105 duration-200 '><Link to="Edu" spy={true} smooth={true}offset={50}duration={500}>Education</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-gray-500 scale-105 duration-200 '><Link to="Exp" spy={true} smooth={true}offset={50}duration={500}>Experience</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-gray-500 scale-105 duration-200 '><Link to="Projects" spy={true} smooth={true}offset={50}duration={500}>Projects</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-gray-500 scale-105 duration-200 '><Link to="Contact" spy={true} smooth={true}offset={50}duration={500}>Contact</Link></li>
        </ul>
        <div onClick={()=>setNav(!Nav)}className='  cursor-pointer z-10 pr-3 text-gray-200 md:hidden'>
         {Nav? <FaTimes size={20}/> :    <FaBars size={30}/>}
        </div>
        {Nav && (
              <ul className='flex flex-col justify-center items-center absolute top-0 left-0 right-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-700 '>  
              <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500 '><Link to="Home" spy={true} smooth={true}offset={50}duration={500}>Home</Link></li>
              <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500'><Link to="About" spy={true} smooth={true}offset={50}duration={500}>About</Link></li>
              <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500'><Link to="Edu" spy={true} smooth={true}offset={50}duration={500}>Education</Link></li>
              <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500'><Link to="Exp" spy={true} smooth={true}offset={50}duration={500}>Experience</Link></li>
              <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500'><Link to="Projects" spy={true} smooth={true}offset={50}duration={500}>Projects</Link></li>
              <li className='cursor-pointer px-4 py-6 text-4xl hover:text-gray-500 '><Link to="Contact" spy={true} smooth={true}offset={50}duration={500}>Contact</Link></li>
          </ul>
        )}
{/* 
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 right-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-700'>  
            <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500 '>Home</li>
            <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500'>About</li>
            <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500'>Experience</li>
            <li className='cursor-pointer px-4 py-6 text-4xl  hover:text-gray-500'>Projects</li>
            <li className='cursor-pointer px-4 py-6 text-4xl hover:text-gray-500 '>Contact</li>
        </ul> */}
    </div>
  );
};

export default Navbar;
