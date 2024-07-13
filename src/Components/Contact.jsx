import React from 'react'

export const Contact = () => {
  return (
    <div id="Contact" name="contact" className='bg-gradient-to-b from-black to bg-slate-900 h-screen w-full text-white '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 flex flex-col justify-center mt-5'>
            <button className='border-solid border-2 border-gray-500 bg-transparent text-3xl font-bold z-10 cursor-default px-12 w-3/4 mx-auto py-5 shadow-md shadow-slate-600'>Let's Connect</button>
                <p className='py-4 text-lg font-semibold mt-6 Submit the form below to get in touch with me mx-auto inline border-b-2 border-gray-600'>Submit the form below to connect</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/aolglzvb" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder="Enter your name" className='p-4 bg-transparent border-2 rounded-md text-white hover:outline-none'/>
                    <input type="text" name="email" placeholder="Enter your Email" className='p-4 bg-transparent border-2 rounded-md text-white hover:outline-none my-4'/>
                    <textarea name="message" placeholder="Pen your Suggestions..." row="15" className='p-4 bg-transparent border-2 rounded-md text-white hover:outline-none h-40 '>
                        </textarea>
                        <button className=' flex items-center justify-between max-w-fit rounded-md px-8 py-3 mt-5 text-white bg-gradient-to-r from-cyan-400 to-indigo-600  cursor-pointer font-semibold'>Let's talk !</button>
                </form>
            </div>
        </div>
    </div>
  )
}

