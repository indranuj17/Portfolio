import React from 'react'
import CSS from '../assets/CSS.png'
import Gitt from '../assets/Gitt.png'
import Html from '../assets/Html.png'
import Javascript from '../assets/Javascript.png'
import react from '../assets/React.png'
import Tailwind from '../assets/Tailwind.png'
import cpr from '../assets/C.png'
import ppr from '../assets/Python.png'


const Exp = () => {
  return (
    <div id="Exp" name='exp' className='bg-gradient-to-b from-black to-slate-900 w-full text-white md:h-150vh '>
      <div className='flex flex-col max-w-screen-lg p-4 m-auto justify-center w-full h-full'>
        <div className='pb-8 flex flex-col justify-center mt-10'>
        <button className='border-solid border-2 border-gray-500 bg-transparent text-3xl font-bold z-10 cursor-default px-12 py-5 shadow-md shadow-slate-600'>Experience</button>
          <p className='py-9 text-lg font-semibold mt-6'>These are some Technologies I have worked in.......Loading...</p>
        </div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-center py-8 '>
          <div className='shadow-md shadow-orange-500 hover:scale-105 duration-400 py-2 rounded-lg   '>
            <img src={Html} alt="html" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200'/>
            <p className='mt-4 font-semibold text-lg'>HTML</p>
          </div>

          
          <div className='shadow-md shadow-blue-700 hover:scale-105 duration-400 py-2 rounded-lg   '>
            <img src={CSS} alt="css" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200'/>
            <p className='mt-4 font-semibold text-lg'>CSS</p>
          </div>

          
          <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-400 py-2 rounded-lg   '>
            <img src={Javascript} alt="Javascript" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200'/>
            <p className='mt-4 font-semibold text-lg'>JAVASCRIPT</p>
          </div>

          
          <div className='shadow-md shadow-cyan-600 hover:scale-105 duration-400 py-2 rounded-lg   '>
            <img src={Tailwind} alt="tailwind" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200'/>
            <p className='mt-4 font-semibold text-lg'>TAILWIND</p>
          </div>

          
          <div className='shadow-md shadow-cyan-400 hover:scale-105 duration-400 py-2 rounded-lg   '>
            <img src={react} alt="React" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200'/>
            <p className='mt-4 font-semibold text-lg'>REACT.JS</p>
          </div>

          
          <div className='shadow-md shadow-gray-400 hover:scale-105 duration-400 py-2 rounded-lg   '>
            <img src={Gitt} alt="github" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200'/>
            <p className='mt-4 font-semibold text-lg'>GITHUB</p>
          </div>

          
          <div className='shadow-md shadow-blue-700 hover:scale-105 duration-400 py-2 rounded-lg   '>
            <img src={cpr} alt="cpr" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200'/>
            <p className='mt-4 font-semibold text-xl tracking-wider'>C++</p>
          </div>

          
          <div className='shadow-md shadow-green-500 hover:scale-105 duration-400 py-2 rounded-lg   '>
            <img src={ppr} alt="github" className='rounded-lg w-20 mx-auto hover:scale-100 duration:200'/>
            <p className='mt-4 font-semibold text-lg'>PYTHON</p>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Exp
