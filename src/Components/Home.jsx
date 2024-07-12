import React from 'react'
import Hero from '../assets/Hero.png'
import { HiChevronDoubleRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-slate-700 to-slate-900'>
      <div className='max-w-screen-lg  mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
        <div className='flex flex-col text-white justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
          <p className=' py-4 text-gray-400 max-w-md'>I'm a frontend developer with a keen eye for detail, creating seamless and engaging user experiences. Skilled in HTML, CSS, JavaScript, and modern frameworks like  Tailwind(CSS) and React, I bring designs to life.</p>
        <div >
        <button className='group flex items-center max-w-fit rounded-md px-6 py-3 mt-3 text-white bg-gradient-to-r from-cyan-400 to-indigo-600  cursor-pointer font-semibold'>Portfolio
          <span className='ml-3 group-hover:rotate-90 duration-200'><HiChevronDoubleRight size={18} />
          </span>
        </button>
      </div>
    </div>
    <div>
      <img className='rounded-lg'src={Hero} alt="hero" />
    </div>
  </div>
      
</div>
  )
}

export default Home