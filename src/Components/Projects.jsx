import React from 'react'
import Netflix from '../assets/Netflix.jpg'
import Project1 from '../assets/Project1.jpg'
import Project2 from '../assets/Project2.jpg'
import Project3 from '../assets/Project3.jpg'
import Project4 from '../assets/Project4.jpg'

const Projects = () => {
  return (
    <div name='Projects' className='bg-gradient-to-b from-gray-900 to-black w-full text-white md:h-150vh '>
      <div className='flex flex-col max-w-screen-lg p-4 m-auto justify-center w-full h-full '>
        <div className='pb-8 flex flex-col justify-center mt-10'>
        <button className='border-solid border-2 border-gray-500 bg-transparent text-3xl font-bold z-10 cursor-default px-8 w-1/2 mx-auto py-5 shadow-md shadow-slate-600'>Projects</button>
          <p className='py-4 text-lg font-semibold mt-6 Submit the form below to get in touch with me mx-auto '>Check out my work right here !</p>
        </div>
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-500 rounded-xl'>
            <img src={Netflix} alt="Netflix" className='rounded-lg duration-200 hover:scale-105' />
            <div className='flex justify-center items-center'>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105  '><a href="https://netflixclonee.netlify.app/ ">Demo</a></button>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105  '><a href="https://github.com/indranuj17/Netflix-Cl- ">Code</a></button>
            </div>
          </div>
          <div className='shadow-md shadow-gray-400 rounded-xl'>
            <img src={Project1} alt="Netflix" className='rounded-lg duration-200 hover:scale-105' />
            <div className='flex justify-center items-center'>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105 '><a href="https://text-se-speech17.netlify.app/ ">Demo</a></button>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105 '><a href=" https://github.com/indranuj17/Text-se-speech-Converter">Code</a></button>
            </div>
          </div>
          <div className='shadow-md shadow-gray-400 rounded-xl'>
            <img src={Project2} alt="Netflix" className='rounded-lg duration-200 hover:scale-105' />
            <div className='flex justify-center items-center'>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105 '><a href="https://currencyexhange2.netlify.app/ ">Demo</a></button>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105 '><a href="https://github.com/indranuj17/CurrConverter ">Code</a></button>
            </div>
          </div>
          <div className='shadow-md shadow-gray-400 rounded-xl'>
            <img src={Project3} alt="Netflix" className='rounded-lg duration-200 hover:scale-105' />
            <div className='flex justify-center items-center'>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105 '><a href=" ">Demo</a></button>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105 '><a href="https://github.com/indranuj17/id-react-one-portfolio ">Code</a></button>
            </div>
          </div>
          <div className='shadow-md shadow-gray-400 rounded-xl'>
            <img src={Project4} alt="Netflix" className='rounded-lg duration-200 hover:scale-105' />
            <div className='flex justify-center items-center'>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105 '><a href="https://cineholic.netlify.app/ ">Demo</a></button>
              <button className='px-5 py-2 m-3 w-1/2 font-bold text-xl duration-200 hover:scale-105 '><a href="https://github.com/indranuj17/MovieSearch ">Code</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
