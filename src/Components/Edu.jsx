import React from 'react'
// import { HiAcademicCap } from "react-icons/hi";
import Nit from '../assets/Nit.png'
import Aps from '../assets/Apsb.png'
const Edu = () => {
  return (
    <div id="Edu" name="edu" className='bg-gradient-to-b from-black to-slate-800 h-200vh w-full text-white'>
        <div className='max-w-screen-lg flex flex-col justify-center items-center m-auto p-4 w-full h-full'>
            <div className='pb-8 flex flex-col justify-center mt-10'>
            <button className='border-solid border-2 border-gray-400 bg-transparent text-3xl font-bold z-10 cursor-default px-5 py-5 shadow-md shadow-slate-600 w-3/4 mx-auto'>Education</button>
            <p className='py-9 text-lg font-semibold mt-6'>Get to know anout my Educational Background</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-8 px-12 py-8 sm:px-0 text-center'>
                <div className='flex flex-col justify-center items-center shadow-md shadow-orange-500 hover:scale-105 duration-400 py-4 rounded-lg  '>
                    <p className='font-semibold text-xl tracking-wider mb-4 inline border-b-2 border-spacing-y-1.5 border-gray-600'>Undergraduation</p>
                    <img src={Nit} alt="logo" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200 py-5' />
                    <p>I'm persuing  B.Tech in Electronics and Communication Engineering (ECE) from <span className='font-bold '> NIT Silchar  </span> with a current CGPA of 8.33, garduation expected at 2027, showcasing a solid foundation in technical skills and knowledge, complemented by a passion for web development and AI/ML.</p>
                </div>

                <div className='flex flex-col justify-center items-center shadow-md shadow-orange-500 hover:scale-105 duration-400 py-4 rounded-lg  '>
                    <p className='font-semibold text-xl tracking-wider mb-4 inline border-b-2 border-gray-600'>High Schooling</p>
                    <img src={Aps} sizes={30} alt="logo" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200 py-5' />
                    <p className='text-left pl-3'>I did my high schooling from Army Public School,Basistha with Science stream. I chose PCM as my core subjects to further persue an Engineering degree. </p>
                    <br/>
                    <p className='text-left pl-3'>Grade:94.75% (PCM&Eng) </p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Edu
