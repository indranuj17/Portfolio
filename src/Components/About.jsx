import React from 'react'
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const About = () => {
  return (
    <div name="About " className='max-h-150vh w-full text-white bg-gradient-to-b from-slate-800 to-black flex  justify-center items-center'>
        <div className='max-w-screen-lg flex flex-col justify-center items-center p-4 w-full h-full'>
            <div className='pb-8 mt-4'>
                <button className='border-solid border-2 border-gray-500 bg-transparent text-3xl font-bold z-10 cursor-default px-12 py-5  shadow-md shadow-slate-600'>About</button>
            </div>
            <p className='text-xl mt-5'>I'm a dedicated frontend developer with a deep passion for web development and AI/ML. My journey in tech has been driven by a fascination with creating intuitive and engaging user experiences. I specialize in HTML, CSS, JavaScript, and modern frameworks like React and Tailwind(CSS), always staying up-to-date with the latest industry trends. </p>
            

            <p className='text-xl mt-5'>Beyond frontend development, I'm captivated by the potential of AI and machine learning to revolutionize how we interact with technology. I'm committed to continuous learning and leveraging these powerful tools to build innovative solutions that make a meaningful impact.</p>

            <div className='left-0 mt-3'>
        <button className=' flex items-center justify-between max-w-fit rounded-md px-8 py-3 mt-3 text-white bg-gradient-to-r from-cyan-400 to-indigo-600  cursor-pointer font-semibold'><a href="https://drive.google.com/file/d/1g-t0KHJJkcyqJAaG7wsVVqYQvpIdtlVP/view?usp=drive_link">Visit CV</a>
        <span className='ml-8 group-hover:rotate-90 duration-200'>< HiArrowTopRightOnSquare  size={25} />
        </span>
         
        </button>
      </div>
        </div>

        
    </div>
  )
}

export default About