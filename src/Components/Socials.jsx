import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed '>
        <ul>
            <li className='flex justify-between items-center bg-gradient-to-r from-slate-700 to-gray-400 w-40 h-14 px-4 font-semibold rounded-none text-xl ml-[-100px] hover:ml-[-10px]  hover:hover:rounded-md duration-200'>
                <a href="https://www.linkedin.com/in/indranuj-dev-b45366202/" className='flex justify-between w-full text-white'>
                    <>Linkedin <FaLinkedin  size={25} /> </>
                  </a>
            </li>
            <li className='flex justify-between items-center bg-gradient-to-r from-slate-700 to-gray-400 w-40  h-14 px-4 font-semibold rounded-none text-xl ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                <a href="https://github.com/indranuj17" className='flex justify-between w-full text-white'>
                    <>Github <FaGithub  size={25} /> </>
                  </a>
            </li>
            <li className='flex justify-between items-center bg-gradient-to-r from-slate-700 to-gray-400 w-40  h-14 px-4 font-semibold rounded-none text-xl ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                <a href="indranujdev015@gmail.com" className='flex justify-between w-full text-white'>
                    <>Gmail < HiMail size={25} /> </>
                  </a>
            </li>
            <li className='flex justify-between items-center bg-gradient-to-r from-slate-700 to-gray-400 w-40 h-14 px-4 font-semibold rounded-none text-xl ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                <a href="https://drive.google.com/file/d/1g-t0KHJJkcyqJAaG7wsVVqYQvpIdtlVP/view?usp=drive_link" className='flex justify-between w-full text-white'>
                    <>Resume <BsFillPersonLinesFill size={25} /> </>
                  </a>
            </li>
        </ul>
    </div>
  )
}

export default Socials