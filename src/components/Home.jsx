import React from 'react'
import myImage from "../assets/ava.jpg"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name ="home" className='md:h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm kevin</h2>
                <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-sky-400 to-blue-500 cursor-pointer hover:scale-105 duration-100'>
                        Porfolio 
                         <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}
                                className="ml-1"
                            />
                         </span>      
                    </Link>
                </div>
            </div>
            <div className='mx-16'>
                <img 
                src = {myImage}
                alt="my profile"
                className='rounded-3xl mx-auto h-80 w-80 md:w-full '
                />
            </div>
        </div>
    </div>
  
  )
}

export default Home